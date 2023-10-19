import { PaymentsInterface } from "../../interfaces/IPayment";
import { MembersInterface } from "../../interfaces/IMember";


const apiUrl = "http://localhost:8080";



// --------------------------------------------- Login/Register --------------------------------------------- //
// ADD USER member
async function CreateMember(data: MembersInterface) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  let res = await fetch(`${apiUrl}/members`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
      if (res.data) {
        return { status: true, message: res.data };
      } else {
        return { status: false, message: res.error };
      }
    });

  return res;
}

// Get * User
async function GetMembers() {
const requestOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

let res = await fetch(`${apiUrl}/members`, requestOptions)
  .then((response) => response.json())
  .then((res) => {
    if (res.data) {
      return res.data;
    } else {
      return false;
    }
  });

return res;
}

// Get User : username
async function LoginMemberByUsername(username: String | undefined) {
const requestOptions = {
  method: "GET"
};

let res = await fetch(`${apiUrl}/member/${username}`, requestOptions)
  .then((response) => response.json())
  .then((res) => {
    if (res.data) {
      return res.data;
    } else {
      return false;
    }
  });

return res;
}

///---------------------------------------------------------Occupation----------------------------------------------------------------------------//
async function GetOccupations() {
const requestOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

let res = await fetch(`${apiUrl}/occupations`, requestOptions)
  .then((response) => response.json())
  .then((res) => {
    if (res.data) {
      return res.data;
    } else {
      return false;
    }
  });

return res;
}

//---------------------------------------------------------Gender----------------------------------------------------------------------------//
async function GetGender() {
const requestOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

let res = await fetch(`${apiUrl}/genders`, requestOptions)
  .then((response) => response.json())
  .then((res) => {
    if (res.data) {
      return res.data;
    } else {
      return false;
    }
  });

return res;
}

async function LoginDentistByUsername(username: String | undefined) {
const requestOptions = {
  method: "GET"
};

let res = await fetch(`${apiUrl}/dentist/${username}`, requestOptions)
  .then((response) => response.json())
  .then((res) => {
    if (res.data) {
      return res.data;
    } else {
      return false;
    }
  });

return res;
}

// 

async function LoginAdminByUsername(username: String | undefined) {
const requestOptions = {
  method: "GET"
};

let res = await fetch(`${apiUrl}/admin/${username}`, requestOptions)
  .then((response) => response.json())
  .then((res) => {
    if (res.data) {
      return res.data;
    } else {
      return false;
    }
  });

return res;
}

//---------------------------------------------------------Payment----------------------------------------------------------------------------//
async function CreatePayment(data: PaymentsInterface) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  let res = await fetch(`${apiUrl}/payments`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
      if (res.data) {
        return { status: true, message: res.data };
      } else {
        return { status: false, message: res.error };
      }
    });

  return res;
}
async function GetPayments() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  let res = await fetch(`${apiUrl}/payments`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
      if (res.data) {
        return res.data;
      } else {
        return false;
      }
    });

  return res;
}

async function DeletePaymentByID(id: Number | undefined) {
  const requestOptions = {
    method: "DELETE"
  };

  let res = await fetch(`${apiUrl}/payments/${id}`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
      if (res.data) {
        return res.data;
      } else {
        return false;
      }
    });

  return res;
}

async function GetPaymentById(id: Number | undefined) {
  const requestOptions = {
    method: "GET"
  };

  let res = await fetch(`${apiUrl}/payments/${id}`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
      if (res.data) {
        return res.data;
      } else {
        return false;
      }
    });

  return res;
}


//---------------------------------------------------------Service----------------------------------------------------------------------------//
async function GetServices() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  let res = await fetch(`${apiUrl}/services`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
      if (res.data) {
        return res.data;
      } else {
        return false;
      }
    });

  return res;
}




export {
  CreateMember,
  GetMembers,
  GetOccupations,
  GetGender,
  LoginMemberByUsername,
  LoginDentistByUsername,
  LoginAdminByUsername,


  GetServices,

  CreatePayment,
  GetPayments,
  GetPaymentById,
  DeletePaymentByID,

};