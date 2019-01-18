const initialState = {
    id : null,
    role :null,
    company : {
        companyName:"",
        companyPhone:"",
        companyAddress:"",
        companySignatory:{},
        singleAdd:"",
        taxInfo : {},
        paySchedule : {},
        bankAccount : {},
    },
    employeeDetails : {},
    compensation : {},
    payroll : {
        data:{},
        empData:[]
    },
    userName : null
};
export default function reducer(state = initialState, action={}) {
  switch(action.type){
        case 'updateInfo':
            console.log("reducer info:",action.payload);
            state.id=action.payload.id;
            state.role=action.payload.role;
            console.log("reducer info state:",state);
            return state;

      case 'updateUser':
            console.log("user name:",action.payload);
            state.userName=action.payload;
            console.log("user:",state);
            return state;

      case  'update_role':
          console.log("reducer role:",action.payload);
          console.log("reducer role state:",state);
          return state;

    case 'updateCompany':
      state.company.companyName=action.payload.companyName;
      state.company.companyAddress=action.payload.companyAddress;
      state.company.companyPhone=action.payload.companyPhone;
      state.company.companySignatory=action.payload.companySignatory;
      state.company.singleAdd=action.payload.line1+" "+action.payload.line2+" "+action.payload.city+" "+action.payload.state1+" "+action.payload.zip;
      console.log("update company:",state.company);
      return state;

      case 'updatePayroll':
          state.payroll.data.id = action.payload.data.id;
          state.payroll.data.totalAmt = 0;
          state.payroll.empData = action.payload.tableData;
          let total = 0;
          for(let emp of action.payload.tableData){
              let subTotal = 0;
              subTotal = (emp.payAmt*emp.hours) - emp.taxes + emp.benefits;
              emp.subTotal = subTotal;
              total += subTotal;
          }
          state.payroll.data.totalAmt = total;
          state.payroll.payrollName = action.payload.data.payrollName;

          console.log("update payroll:",state.payroll);
          return state;

    case 'updateTaxInfo':
        state.company.taxInfo.fedEin = action.payload.federalEin;
        state.company.taxInfo.companyType = action.payload.companyType;
        state.company.taxInfo.depositSchedule = action.payload.depositSchedule;
        state.company.taxInfo.eddNo = action.payload.eddAccountNumber;
        state.company.taxInfo.suiRate = action.payload.suiRate;
        state.company.taxInfo.ettRate = action.payload.ettRate;
      console.log("taxinfo reducer:",state);
      return state;

    case 'updatePaySchedule':
        state.company.paySchedule.payPeriod = action.payload.payPeriod;
        state.company.paySchedule.firstPayDate = action.payload.firstPayDate;
        state.company.paySchedule.dayOfMonth = action.payload.dayOfMonth;
      console.log("paySchedule reducer:",state);
      return state;

    case 'updateBankAccount':
        state.company.bankAccount.accountNum = action.payload.accountNum;
        state.company.bankAccount.routingNum = action.payload.routingNum;
        state.company.bankAccount.accType = action.payload.accType;
        state.company.bankAccount.recurFunding = action.payload.recurFunding;
        console.log("bankAccount reducer",state);
      return state;

    case 'update_employeeDetails' :
        state.employeeDetails = action.payload;
        return state;

    case 'updateCompensation' :
        state.compensation = action.payload;
        return state;

    default:
      console.log("in default");
      return state;
  }

}

