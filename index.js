const express = require('express');
require('dotenv').config();
const cors = require('cors');

const https = require('https');

const path = require('path');
const fs = require('fs');


const corsOptions = {
    origin: "*", 
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  };
  


// Route path
const userRouter = require('./routes/users');
const clientRouter = require('./routes/client_profile');
const funnelConRouter = require('./routes/funnel_conversation');
const prospectsRouter = require('./routes/prospect_details');
const costCenterRouter = require('./routes/cost_center');
const accountInfoRouter = require('./routes/account_info');
const SurveyAnswerRouter = require('./routes/survey_answers');
const SurveyQuestionRouter = require('./routes/survey_questions');
const SurveyRouter = require('./routes/surveys');

const accountLinkingRouter = require('./routes/account_linking');
const expensesAccRouter = require('./routes/expensesAcc');
const accountMapRouter = require('./routes/account_map');
const cashBankRouter = require('./routes/cash_bank');
const directExpensesRouter = require('./routes/direct_expenses');
const projectRouter = require('./routes/projects');
const incomeRouter = require('./routes/income');
const capitalAccRouter = require('./routes/capitalacc');
const finAccInvestmentFundDetailsRouter =require("./routes/fin_acc_investment_fund_details");
const finAccInvestmentAssetsAccountRouter =require("./routes/fin_acc_investment_assets_account");
const finAccPurchaseInvestmentAssetsAppraisalRouter =require("./routes/fin_acc_purchase_investment_assets_appraisal");
const YearlyAccountTotalsRouter =require("./routes/bi_sums_yearly_account_totals");
const CurrentDailyAccountTotalsRouter =require("./routes/bi_sums_current_day_account_totals");
const MonthlyAccountTotalsRouter =require("./routes/bi_sums_monthly_account_totals");
const PayOutsAccRouter =require("./routes/fin_acc_pay_outs_accounts");

//REMS BUSINESS SUITE PROFESSIONAL POS / TILL POINT
 const branchRouter = require('./routes_pos/branches');
const currencyRouter = require('./routes_pos/currency');
const salesPricesRouter = require('./routes_pos/sales_prices');
const saleRecordRouter = require('./routes_pos/sale_records');
const productDefinitionRouter = require('./routes_pos/product_definition');
const inventoryMgtRouter = require('./routes_pos/inventorymgt');
const shiftRouter = require('./routes_pos/shift');
const shiftBalancesRouter = require('./routes_pos/shiftbalances');
const CustomerRouter = require('./routes_pos/customer_details');
const pettyCashRouter = require('./routes_pos/pettycash');
const saleListRouter = require('./routes_pos/salelist');
// const CompanyRouter = require('./routes_gas/company');
const salesInvoiceRouter = require('./routes_pos/sales_invoices');
const quotationProformaInvoiceRouter = require('./routes_pos/quotation_profoma_invoices');
const companySetupRouter = require('./routes_pos/company_setup');




// REMS GAS
// /const paymentRouter = require('./routes_gas_ecosystem/payments');
const salesShiftPosGasRouter = require('./routes_gas_ecosystem/sales_shift');
const branchesRouter = require('./routes_gas_ecosystem/branchz');

const InventoryRouter = require('./routes_gas_ecosystem/inventory');
const productRouter = require('./routes_gas_ecosystem/products');
const mkt_place_paymentRouter = require('./routes_gas_ecosystem/mkt_place_payments');
const salesPriceRouter = require('./routes_gas_ecosystem/sales_prices');
const uploadedFilesRouter = require('./routes_pos/uploaded_files');



const MemberRouter =require("./routes/members");




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
app.use('/survey_answers', SurveyAnswerRouter);
app.use('/surveyquestions', SurveyQuestionRouter);
app.use('/surveys', SurveyRouter);

app.use('/accountlinking', accountLinkingRouter);
app.use('/expensesacc', expensesAccRouter);
app.use('/directexpenses', directExpensesRouter);
app.use('/accountmap', accountMapRouter);
app.use('/cashbank', cashBankRouter);
app.use('/projects', projectRouter);
app.use('/income', incomeRouter);
app.use('/capitalacc', capitalAccRouter);
app.use("/fin_acc_investment_fund_details", finAccInvestmentFundDetailsRouter);
app.use("/fin_acc_investment_assets_account", finAccInvestmentAssetsAccountRouter);
app.use("/fin_acc_purchase_investment_assets_appraisal", finAccPurchaseInvestmentAssetsAppraisalRouter);
app.use("/bi_sum_yearly_account_totals", YearlyAccountTotalsRouter);
app.use("/bi_sum_current_daily_account_totals", CurrentDailyAccountTotalsRouter);
app.use("/bi_sum_monthly_account_totals", MonthlyAccountTotalsRouter);
app.use("/fin_acc_pay_outs_accounts", PayOutsAccRouter);


//POS Route Usage
app.use('/branches', branchRouter);
app.use('/currency', currencyRouter);
app.use('/salesprice', salesPricesRouter);
app.use('/salerecords', saleRecordRouter);
app.use('/productdefinition', productDefinitionRouter);
app.use('/inventorymgt', inventoryMgtRouter);
app.use('/shift', shiftRouter);
app.use('/shiftbalances', shiftBalancesRouter);
app.use('/customers', CustomerRouter);
app.use('/pettycash', pettyCashRouter);
app.use('/salelist', saleListRouter);
// app.use('/company', CompanyRouter);
//app.use('/saleshift', saleshiftRouter);

//Gas
// app.use('/payments', paymentRouter);
app.use('/salesshiftgas', salesShiftPosGasRouter);
app.use('/branches', branchesRouter);
app.use('/inventory', InventoryRouter);


app.use('/products', productRouter);
app.use('/mkt_place_payments', mkt_place_paymentRouter);
app.use('/salesprices', salesPriceRouter);
app.use('/sales_invoices', salesInvoiceRouter);
app.use('/quotationprofomainvoices', quotationProformaInvoiceRouter);
app.use('/uploadedfiles', uploadedFilesRouter);
app.use('/companysetup', companySetupRouter);
app.use(cors(corsOptions));

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

//  app.listen(process.env.APPPORT || '3009', () => {
//      console.log('app is listening to port' + process.env.APPPORT);
//  });
// //mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm