
export default function handler(req,resp){
    resp.send(`id=${req.query.id}`)
}