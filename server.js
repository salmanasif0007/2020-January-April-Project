const ejs= require ('ejs')
const express= require ('express')
const app= express();
app.set('view engine','ejs')
app.get('/',function(req,res){
    res.render('index',{imgs: 'https://cdn.vox-cdn.com/thumbor/_AjHymGfQPg_6IyQgE-jDM_E5fQ=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/16019250/log_2048.png' ,name:'Shekha Maha',times:'6m',caption:'Lorem ipsum dolor sit amet consectetur',
    imgs1:'https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687',
    Comment  :'Comment',Share:'Share',Like:'Like'
})
    })
app.listen(3000)