import Mux from '@mux/mux-node';

const { Video } = new Mux();


module.exports = async (req, res) => {
  console.log(req.query.getlink)
  console.log(req.body);
if(req.query.getlink=="false"){  
const upload = await Video.Uploads.get(req.body.id)
console.log(upload)
res.send(await Video.Assets.get(upload.asset_id));
}else{
Video.Uploads.create({
    cors_origin: 'https://skap.tv', 
    new_asset_settings: {
      playback_policy: 'public',
      test: true
    }
  }).then(upload => {
    console.log(upload);
    upload.asset_id
    res.send(upload);
  });
}}