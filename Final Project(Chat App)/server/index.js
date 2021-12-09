const express =require('express');//Using the express
const socketio =require('socket.io');//using the socket.io
const http =require('http');
const cors=require('cors');
const {   addUser,removeUser,getUser,getUsersInRoom  }  =require('./users.js');
  
const PORT=process.env.PORT ||5000 ;//specifying the port 
const router =require('./router');
 const app=express();
 const server=http.createServer(app);
 const io=socketio(server);
 io.on('connection',(socket)=>{    //Client is joining
    
     socket.on('join',({name,room},callback)=>{   //smthng is happening on the join 
    const {error,user}=addUser({id:socket.id,name,room});
    if(error) return callback(error);
    socket.emit('message',{user:'admin',text:`${user.name},welcome to the room ${user.room}`})//WElcome message to any user.
    socket.broadcast.to(user.room).emit('message',{user:'admin',text:`${user.name},has joined!`});

    //if there are no errors we are going to simply call the another build-in socket method
    socket.join(user.room);

    io.to(user.room).emit('roomData',{room:user.room,users:getUsersInRoom(user.room)})
    callback();

    //Here callback is done while we have some error and used for error handling.

     
 
     });
     socket.on('sendMessage',(message,callback)=>{
      const user =getUser(socket.id);
      io.to(user.room).emit('message',{user:user.name,text:message});
      io.to(user.room).emit('roomData',{room:user.room,users:getUsersInRoom(user.room)});
      callback();
     });

     socket.on('disconnect',()=>{
        const user=removeUser(socket.id);

        if(user){
            io.to(user.room).emit('message',{user:'admin',text:`${user.name} has left.`})
        }
     })
 });
 app.use(router);
 app.use(cors());

 server.listen(PORT,()=>console.log(`server has started on port ${PORT}`));