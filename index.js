const express = require('express');
require('dotenv').config();
const cors = require('cors');

const https = require('https');

const path = require('path');
const fs = require('fs');

// Route path
const userRouter = require('./routes/users');
const clientRouter = require('./routes/client_profile');
const funnelConRouter = require('./routes/funnel_conversation');
const prospectsRouter = require('./routes/prospect_details');
const costCenterRouter = require('./routes/cost_center');
const accountInfoRouter = require('./routes/account_info');
const accountLinkingRouter = require('./routes/account_linking');
const expensesAccRouter = require('./routes/expensesAcc');
const accountMapRouter = require('./routes/account_map');
const cashBankRouter = require('./routes/cash_bank');
const directExpensesRouter = require('./routes/direct_expenses');
const projectRouter = require('./routes/projects');
const incomeRouter = require('./routes/income');

const app = express();
app.use(express.json());
app.use(cors());

//App Route Usage
app.use('/users', userRouter);
app.use('/clients', clientRouter);
app.use('/funnelcon', funnelConRouter);
app.use('/prospects', prospectsRouter);
app.use('/costcenter', costCenterRouter);
app.use('/accountinfo', accountInfoRouter);
app.use('/accountlinking', accountLinkingRouter);
app.use('/expensesacc', expensesAccRouter);
app.use('/directexpenses', directExpensesRouter);
app.use('/accountmap', accountMapRouter);
app.use('/cashbank', cashBankRouter);
app.use('/projects', projectRouter);
app.use('/income', incomeRouter);

app.get('/', (req, res) => {
    res.send("REMS ECOSYSTEM");
})

const options = {
  cert: fs.readFileSync('/etc/letsencrypt/live/srv547457.hstgr.cloud/fullchain.pem'),
  key: fs.readFileSync('/etc/letsencrypt/live/srv547457.hstgr.cloud/privkey.pem')
};

https.createServer(options, app).listen(process.env.APPPORT || '3009', () => {
  console.log('app is listening to port' + process.env.APPPORT);
});

// app.listen(process.env.APPPORT || '3003', () => {
//     console.log('app is listening to port' + process.env.APPPORT);
// });