module.exports ={
    get_results: (req,res) => {
        req.app.get('db').get_results().then((results) => {
            res.status(200).send(results);
        }).catch((error) => {
            res.status(500).send('Unable to get results');
            console.log(error);
        })
    },
    create_result: (req,res) => {
        let {img1, img2, weight, bmi} = req.body;

        req.app.get('db').create_result([img1, img2, weight, bmi]).then(() => {
            res.status(200).send('Created Result');
        }).catch((error) => {
            res.status(500).send('Unable to create result');
            console.log(error);
        })
    },
    delete_result: (req, res) => {
        const db = req.app.get('db');
        let {id} = req.params;

        req.app.get('db').delete_result([id]).then(() => {
            res.status(200).send('Result deleted');
        }).catch(() => {
            res.status(500).send('Unable to delete result');
        })
    },
    get_result: (req,res) => {
        let {id} = req.params;

        req.app.get('db').get_result([id]).then((result) => {
            res.status(200).send(result);
        }).catch(() => {
            res.status(500).send('Cannot get result');
        })
    },
    update_result: (req, res) => {
        let {id} = req.params;

        req.app.get('db').update_result([desc, id]).then(() => {
            res.status(200).send('Result Updated');
        }).catch(() => {
            res.status(500).send('Unable to updated result');
        })
    },
    create_profile: (req,res) => {
        //create_profile.sql only had $1, $2, $3. Extended it to $8. Also, this area was missing profileImg2, as was the SQL file.
        let {profileImg1, profileImg2, firstName, lastName, age, height, weight, bmi} = req.body;

        req.app.get('db').create_profile([profileImg1, profileImg2, firstName, lastName, age, height, weight, bmi]).then(() => {
            res.status(200).send('Created Profile');
        }).catch((error) => {
            res.status(500).send('Unable to create profile');
            console.log(error);
        })
    },
    update_profile: (req, res) => {
        let {id} = req.params;

        req.app.get('db').update_profile([desc, id]).then(() => {
            res.status(200).send('Profile Updated');
        }).catch(() => {
            res.status(500).send('Unable to updated profile');
        })
    },
    get_profile: (req,res) => {
        //let {id} = req.params;
        //get_profile.sql didn't exist, so I created it
        req.app.get('db').get_profile().then((profile) => {
            res.status(200).send(profile);
        }).catch(() => {
            res.status(500).send('Cannot get result');
        })
    }

}