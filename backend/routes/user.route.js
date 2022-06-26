const Router = require('@koa/router');
const {createUser,getUsers,getUser,updateUser,deleteUser} = require('../api/user.api');

const router = new Router({
    prefix:'/user'
})

router.post('/insert',async (ctx)=>{
    
    const user = ctx.request.body;

    await createUser(user)
    .then(()=>{
        ctx.body = "User Inserted Successfully";
    })
    .catch((err)=>{
        ctx.body = err.message;
    })

})

router.get('/',async (ctx)=>{
    await getUsers()
    .then((data)=>{
        ctx.body = data;
    })
    .catch((err)=>{
        ctx.body = err;
    })
})

router.get('/:id',async(ctx)=>{
    const id = ctx.params.id;

    await getUser(id)
    .then((data)=>{
        ctx.body = data;
    })
    .catch((err)=>{
        ctx.body = err;
    })
})

router.put('/update/:id',async(ctx)=>{
    const id = ctx.params.id;
    const user = ctx.request.body;

    await updateUser(id,user)
    .then(()=>{
        ctx.body = "User Updated Successfully";
    })
    .catch((err)=>{
        ctx.body = err.message;
    })
})

router.delete('/delete/:id',async(ctx)=>{
    const id = ctx.params.id;

    await deleteUser(id)
    .then(()=>{
        ctx.body = "User Deleted Successfully";
    })
    .catch((err)=>{
        ctx.body = err.message;
    })
})

module.exports = router;