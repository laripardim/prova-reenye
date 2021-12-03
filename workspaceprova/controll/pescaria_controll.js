
const { con } = require("./mysql_controll.js")

const all = (req, res) => {
    let string = 'select * from pescaria'
    con.query(string, (err, result) => {
        res.json(result)
    })
}

const get_id = (req, res) => {
    let string = 'select * from pescaria where id = '+ req.params.id
    con.query(string, (err, result)=>{
        res.json(result)
    })
}

const add_cidade = (req,res) => {
    let body = req.body
    let string = 'insert into pescaria(id, nome_cidade, quantidade) values (\'' + body.id + body.nome_cidade + '\',' + body.quantidade + '\')' 
    con.query(string, (err, result)=>{
        if(err != null){
            res.status(400).end()
        }else{
            res.status(200).end()
        }
    })
}

const delete_cidade = (req,res) => {
    let string = 'delete from pescaria where id = ' + req.params.id
    con.query(string, (err, result)=>{
        if(result.affectedRows == 0){
            res.send(400).end()
        }else{
            res.send(200).end()
        }
    })
}

const update_cidade = (req,res) => {
    let nome_cidade = '\''+req.body.nome_cidade+'\''
    let quantidade = req.body.quantidade
    let id = req.body.id
    let string = `update pescaria set nome_cidade = ${nome_cidade}, quantidade= ${quantidade} where id = ${id}`
    con.query(string, (err, result)=>{
        if(result.affectedRows == 1){
            con.query('select * from pescaria where id = '+ id, (err,result)=>{
                res.json(result)
            })
        }else{
            res.send(400).end()
        }
    })
}

module.exports = {
    all,
    get_id,
    add_cidade,
    delete_cidade,
    update_cidade
}