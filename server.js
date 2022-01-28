const {createServer}=require('http');
const next=require('next');

const app=next(
    {
        dev:process.env.NODE_ENV!=='production'
    }
);
const routes=require('./routes');
const handler=routes.getRequestHandler(app);

app.prepare().then(()=>{
    createServer(handler).listen(3000,err=>{
        if(err)
            throw err;
        console.log('Ready on local host:3000')
    })
})
if(process.env.NODE_ENV === 'production'){    
    app.use(express.static('frontend/build'))  // set static folder 
    //returning frontend for any route other than api 
    app.get('*',(req,res)=>{     
        res.sendFile (path.resolve(__dirname,'frontend','build',         
                      'index.html' ));    
    });
}