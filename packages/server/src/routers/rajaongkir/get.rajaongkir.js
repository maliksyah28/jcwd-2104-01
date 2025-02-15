const express = require('express');
const router = express.Router();
const axios = require('axios');

//config axios to rajaongkir
axios.defaults.baseURL = 'https://api.rajaongkir.com/starter';
axios.defaults.headers.common['key'] = '205258f7c4c0e26bd2a06dbbcabd2ca5';
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';

//get province endpoint
router.get('/provinsi', (req, res) => {
  axios
    .get('/province')
    .then((response) => res.json(response.data))
    .catch((err) => res.send(err));
});

//get city endpoint
router.get('/kota/:provId', (req, res) => {
  const id = req.params.provId;
  axios
    .get(`/city?province=${id}`)
    .then((response) => res.json(response.data))
    .catch((err) => res.send(err));
});

// get ongkir endpoint
router.get('/ongkos/:origin/:destination/:weight/:courier', (req, res) => {
  const param = req.params;
  axios
    .post('/cost', {
      origin: param.origin,
      destination: param.destination,
      weight: param.weight,
      courier: param.courier,
    })
    .then((response) => res.json(response.data))
    .catch((err) => res.send(err));
});

module.exports = router;
