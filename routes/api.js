const express = require('express');
const router = express.Router();

const USER = require('./user')
const TASK = require('./task')
const ASSIGNMENT = require('./assignment')
const COMMENT = require('./comment')
const ATTACHMENT = require('./attachment')
const GROUP = require('./group')
const GROUPMEMBERSHIP = require('./groupMembership')
const INVITE = require('./invite')

router.get('/', (req, res) => {
    res.json(req.path)
});

router.use('/user', USER);
router.use('/task', TASK);
router.use('/assignment', ASSIGNMENT);
router.use('/comment', COMMENT);
router.use('/attachment', ATTACHMENT);
router.use('/group', GROUP);
router.use('/groupmembership', GROUPMEMBERSHIP);
router.use('/invite', INVITE);

module.exports = router;