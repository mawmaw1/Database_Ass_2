const Tweet = require('../model/tweetModel')



exports.getDistinctUserCount = () => {
    return Tweet.distinct('user')
}


exports.getTwitterUsersThatLinkOtherUsers = () => {
    return Tweet.aggregate([
        {$match:{text:/@\w+/}},
        {$group:{_id:'$user',count:{$sum:1}}},
        {$sort:{count:-1}},
        {$limit:10}
    ])
}

exports.getMostActiveUsers = () => {
    return Tweet.aggregate([
        {$group: {_id: '$user', count: {$sum:1}}},
        {$sort:{count:-1}},
        {$limit: 10}
    ])

}

exports.getNegativeUsers = () => {
    return Tweet.aggregate([
        {$match:{polarity: {"$lte":1}}},
        {$group: {_id: '$user', count: {$sum:1}}},
        {$sort:{count:-1}},
        {$limit: 5}
    ])
}

exports.getPositiveUsers = () => {
    return Tweet.aggregate([
        {$match:{polarity: {"$gte":3}}},
        {$group: {_id: '$user', count: {$sum:1}}},
        {$sort:{count:-1}},
        {$limit: 5}
        ])
}