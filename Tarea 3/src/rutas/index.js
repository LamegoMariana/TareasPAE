const router = require('express').Router();

const lam3go = require('./lam3go');
const extracurriculars = require('./extracurriculars');
const projects = require('./projects');

// El middleware se usará en todas, así que se pone aquí v:
const auth = require('../middlewares').auth;

router.use('', auth);

router.use('/lam3go', lam3go);
router.use('/extracurriculars', extracurriculars);
router.use('/projects', projects);

module.exports = router;
