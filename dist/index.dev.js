"use strict";

var express = require('express');

require('dotenv').config();

var cors = require('cors');

var https = require('https');

var path = require('path');

var fs = require('fs');

var corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"]
}; // Route path

var userRouter = require('./routes/users');

var clientRouter = require('./routes/client_profile');

var funnelConRouter = require('./routes/funnel_conversation');

var prospectsRouter = require('./routes/prospect_details');

var costCenterRouter = require('./routes/cost_center');

var accountInfoRouter = require('./routes/account_info');

var SurveyAnswerRouter = require('./routes/survey_answers');

var SurveyQuestionRouter = require('./routes/survey_questions');

var SurveyRouter = require('./routes/surveys');

var accountLinkingRouter = require('./routes/account_linking');

var expensesAccRouter = require('./routes/expensesAcc');

var accountMapRouter = require('./routes/account_map');

var cashBankRouter = require('./routes/cash_bank');

var directExpensesRouter = require('./routes/direct_expenses');

var projectRouter = require('./routes/projects');

var incomeRouter = require('./routes/income');

var capitalAccRouter = require('./routes/capitalacc');

var finAccInvestmentFundDetailsRouter = require("./routes/fin_acc_investment_fund_details");

var finAccInvestmentAssetsAccountRouter = require("./routes/fin_acc_investment_assets_account");

var finAccPurchaseInvestmentAssetsAppraisalRouter = require("./routes/fin_acc_purchase_investment_assets_appraisal");

var YearlyAccountTotalsRouter = require("./routes/bi_sums_yearly_account_totals");

var CurrentDailyAccountTotalsRouter = require("./routes/bi_sums_current_day_account_totals");

var MonthlyAccountTotalsRouter = require("./routes/bi_sums_monthly_account_totals");

var PayOutsAccRouter = require("./routes/fin_acc_pay_outs_accounts"); //REMS BUSINESS SUITE PROFESSIONAL POS / TILL POINT


var branchRouter = require('./routes_pos/branches');

var currencyRouter = require('./routes_pos/currency');

var salesPricesRouter = require('./routes_pos/sales_prices');

var saleRecordRouter = require('./routes_pos/sale_records');

var productDefinitionRouter = require('./routes_pos/product_definition');

var inventoryMgtRouter = require('./routes_pos/inventorymgt');

var shiftRouter = require('./routes_pos/shift');

var shiftBalancesRouter = require('./routes_pos/shiftbalances');

var CustomerRouter = require('./routes_pos/customer_details');

var pettyCashRouter = require('./routes_pos/pettycash');

var saleListRouter = require('./routes_pos/salelist'); // const CompanyRouter = require('./routes_gas/company');


var salesInvoiceRouter = require('./routes_pos/sales_invoices');

var quotationProformaInvoiceRouter = require('./routes_pos/quotation_profoma_invoices');

var companySetupRouter = require('./routes_pos/company_setup'); // REMS GAS
// /const paymentRouter = require('./routes_gas_ecosystem/payments');


var salesShiftPosGasRouter = require('./routes_gas_ecosystem/sales_shift');

var branchesRouter = require('./routes_gas_ecosystem/branchz');

var InventoryRouter = require('./routes_gas_ecosystem/inventory');

var productRouter = require('./routes_gas_ecosystem/products');

var mkt_place_paymentRouter = require('./routes_gas_ecosystem/mkt_place_payments');

var salesPriceRouter = require('./routes_gas_ecosystem/sales_prices');

var uploadedFilesRouter = require('./routes_pos/uploaded_files');

var MemberRouter = require("./routes/members");

var app = express();
app.use(express.json());
app.use(cors()); //App Route Usage

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
app.use("/fin_acc_pay_outs_accounts", PayOutsAccRouter); //POS Route Usage

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
app.use('/salelist', saleListRouter); // app.use('/company', CompanyRouter);
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
app.get('/', function (req, res) {
  res.send("REMS ECOSYSTEM");
});
var options = {
  cert: fs.readFileSync('/etc/letsencrypt/live/srv547457.hstgr.cloud/fullchain.pem'),
  key: fs.readFileSync('/etc/letsencrypt/live/srv547457.hstgr.cloud/privkey.pem')
};
https.createServer(options, app).listen(process.env.APPPORT || '3009', function () {
  console.log('app is listening to port' + process.env.APPPORT);
}); //  app.listen(process.env.APPPORT || '3009', () => {
//      console.log('app is listening to port' + process.env.APPPORT);
//  });
// //mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm