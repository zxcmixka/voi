

app.get('/user/:id', (req, res) => {
    res.send('ID: ${req.param.id}');
});

app.post('/user', (req, res) => {
    res.send('User created')
});