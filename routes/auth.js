const express = require('express');
const router = express.Router();

// @Route    GET api/auth
// #desc     Get logged in user
// @access   Private
router.get('/', (req, res) =>{
    res.send('Get logged in user')
})

// @Route    POST api/auth
// #desc     Auth user & get token
// @access   Public
router.post('/', (req, res) => {
    res.send('Log in User')
})

module.exports = router;
