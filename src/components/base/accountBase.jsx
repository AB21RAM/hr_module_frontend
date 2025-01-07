import React, { useState, useEffect } from "react";
import Navbar from "../Header/Header.js";
import Sidebar from "../account/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddFeeHeadForm from "../account/Master/AddFeeHeadForm";
import AddAcademicYearForm from "../account/Master/AddAcademicYearForm";
import AddStudentForm from "../account/Master/AddStudentForm";
import GenerateReceipt from "../account/Generatereceipt";
import AddCategoryForm from "../account/Master/AddCategoryForm";
import MapFeeHeadsForm from "../account/Master/MapFeeHeadsForm";
import CollectFee from "../account//CollectFee";
import Dashboard from "../account//Dashboard";
import AddBranchForm from "../account//Master/AddBranchForm";
import FeeStructure from "../account//FeeStructure";
import Reports from "../account/Reports";
import Receipt from "../account/Account-Print/Receipt";
import DdToallow from "../account/DdToAllow";
import AllowedDD from "../account/AllowedDD";
import EditReceipt from "../account/Master/EditReceipt";
import BankStatement from "../account/BankStatement/BankAccount";
import EditDD from "../account/EditDD";
import FacultyAdmin from "../admission/Admission_recors/Admission_recors";
import AdmssionPrint from "../admission/printApplication/Admission_print";
import SentToBank from "../account/SentToBank";
import NEFTToallow from "../account/NEFTToAllow";
import AllowedNEFT from "../account/AllowedNEFT";
import BankStatements_date from "../account/BankStatement/BankStatements";
import ForgetPass from "../Header/ForgetPass.js";
import Allow_partpayment from "../account/Allow_partpayment/Allow_partpayment";
import MapSingleFee from "../account/Single Fee Head/map_single_fee";
// import Receipt from "../account/Account-Print/Receipt";

const AccountBase = () => {
  return (
    <>
      <div>
        {window.location.pathname == "/receipt" ||
        window.location.pathname == "/BankStatement" ||
        window.location.pathname == "/printApplication" ? (
          <></>
        ) : (
          <Navbar />
        )}
        <section className="rootf containers">
          {window.location.pathname == "/receipt" ||
          window.location.pathname == "/BankStatement" ||
          window.location.pathname == "/printApplication" ? (
            <></>
          ) : (
            <Sidebar />
          )}
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/collectfee" element={<CollectFee />} />
            <Route
              exact
              path="/generatereceipts"
              element={<GenerateReceipt />}
            />

            <Route exact path="/feeStucture" element={<FeeStructure />} />
            <Route exact path="/addStudent" element={<AddStudentForm />} />
            <Route
              exact
              path="/addacademicyear"
              element={<AddAcademicYearForm />}
            />
            <Route exact path="/addbranch" element={<AddBranchForm />} />
            <Route exact path="/addfeeheads" element={<AddFeeHeadForm />} />
            <Route exact path="/addcategory" element={<AddCategoryForm />} />
            <Route exact path="/mapfeetocat" element={<MapFeeHeadsForm />} />
            <Route exact path="/feeStructure" element={<FeeStructure />} />
            <Route exact path="/reports" element={<Reports />} />
            <Route exact path="/allowDD" element={<DdToallow />} />
            <Route exact path="/allowedDD" element={<AllowedDD />} />
            <Route exact path="/editReceipt" element={<EditReceipt />} />
            <Route exact path="/allowNEFT" element={<NEFTToallow />} />
            <Route exact path="/allowedNEFT" element={<AllowedNEFT />} />
            <Route path="/BankStatement" element={<BankStatement />} />
            <Route path="/BankStatements" element={<BankStatements_date />} />
            <Route exact path="/editDD" element={<EditDD />} />
            <Route path="/applications" element={<FacultyAdmin />} />
            <Route exact path="/receipt" element={<Receipt />} />
            <Route path="/printApplication" element={<AdmssionPrint />} />
            <Route path="/sentToBank" element={<SentToBank />} />
            <Route path="/resetpass" element={<ForgetPass />} />
            <Route path="/mapSingleFee" element={<MapSingleFee />} />
	          <Route path="/Allow_partpayment" element={<Allow_partpayment />} />
            <Route exact path="/logout" element={""} />
          </Routes>
        </section>
      </div>
    </>
  );
};

export default AccountBase;
