const express = require('express')
const router = express.Router()


const tweetCtrl = require('./controller/tweetCtrl')

router.get('/distinctUsers', (req, res) =>{

    tweetCtrl.getDistinctUserCount()
        .then(users => {
            res.json(`There are currently ${users.length} distinct users in the DB`);
        })
        .catch(err => {
            res.status(500).end('Error when getting users', err);
        })
})

router.get('/mentionedUsers', (req, res) =>{

    tweetCtrl.getTwitterUsersThatLinkOtherUsers()
        .then(users => {
            resArr = []
            for(i=0;i<users.length;i++){
                resArr[i] = {"place":i+1,"name":users[i]._id,"count":users[i].count}
            }
            result = {"These are the users that mostly link other users:":resArr}
            res.header("Content-Type",'application/json');
            res.send(JSON.stringify(result, null, 4));
            
        })
        .catch(err => {
            res.status(500).end('Error when getting users', err);
        })
})

router.get('/mostActive', (req, res) =>{

    tweetCtrl.getMostActiveUsers()
        .then(users => {
            resArr = []
            for(i=0;i<users.length;i++){
                resArr[i] = {"place":i+1,"name":users[i]._id,"count":users[i].count}
            }
            result = {"These are the most active users:":resArr}
            res.header("Content-Type",'application/json');
            res.send(JSON.stringify(result, null, 4));
            
        })
        .catch(err => {
            res.status(500).end('Error when getting users', err);
        })
})

router.get('/negative', (req, res) =>{

    tweetCtrl.getNegativeUsers()
        .then(users => {
            resArr = []
            for(i=0;i<users.length;i++){
                resArr[i] = {"place":i+1,"name":users[i]._id,"count":users[i].count}
            }
            result = {"These are the most negative users:":resArr}
            res.header("Content-Type",'application/json');
            res.send(JSON.stringify(result, null, 4));
            
        })
        .catch(err => {
            res.status(500).end('Error when getting users', err);
        })
})

router.get('/positive', (req, res) =>{

    tweetCtrl.getPositiveUsers()
        .then(users => {
            resArr = []
            for(i=0;i<users.length;i++){
                resArr[i] = {"place":i+1,"name":users[i]._id,"count":users[i].count}
            }
            result = {"These are the most positive users:":resArr}
            res.header("Content-Type",'application/json');
            res.send(JSON.stringify(result, null, 4));
            
            
        })
        .catch(err => {
            res.status(500).end('Error when getting users', err);
        })
})



module.exports = router