import Mux from '@mux/mux-node';


const { Video } = new Mux();


module.exports = async (req, res) => {

  Video.Uploads.create({
    cors_origin: 'https://skap.tv', 
    new_asset_settings: {
      playback_policy: 'public',
      test: true
    }
  }).then(upload => {
    res.send(upload.url);
  });
  
}