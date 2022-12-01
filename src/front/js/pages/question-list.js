import React, { useState, useContext } from "react";

export const QuestionList = () => {
<section class="py-4"><div class="container-fluid">
  <h2 class="mb-2">Preguntas</h2>
  <p class="lead">Lista de preguntas hechas</p>
  <div class="row text-white text-center">
    <div class="col-md-3 mb-2 mb-md-4">
      <div class="rounded py-2 bg-primary">
        <h2 class="mb-0">448</h2>
        <p class="lead mb-0">Total Tickets</p>
      </div>
    </div>
    <div class="col-md-3 mb-2 mb-md-4">
      <div class="rounded py-2 bg-danger">
        <h2 class="mb-0">81</h2>
        <p class="lead mb-0">Responded</p>
      </div>
    </div>
    <div class="col-md-3 mb-2 mb-md-4">
      <div class="rounded py-2 bg-success">
        <h2 class="mb-0">208</h2>
        <p class="lead mb-0">Resolved</p>
      </div>
    </div>
    <div class="col-md-3 mb-4 mb-md-4">
      <div class="rounded py-2 bg-dark">
        <h2 class="mb-0">159</h2>
        <p class="lead mb-0">Pending</p>
      </div>
    </div>
  </div>
  <div class="table-responsive">
    <table class="table"><thead><tr><th scope="col">ID #</th>
      <th scope="col">Opened By</th>
      <th scope="col">Cust. Email</th>
      <th scope="col">Subject</th>
      <th class="text-center" scope="col">Status</th>
      <th class="text-center" scope="col">Assign to</th>
      <th class="text-center" scope="col">Date</th>
      <th class="text-center" scope="col">Action</th>
      </tr></thead><tbody><tr><td>348</td>
      <td>
        <a href="#">
          <img class="rounded-circle" src="placeholder/pictures/bg_circle.svg?primary=007bff" alt="" height="40" width="40"/>
          Lauren North
        </a>
      </td>
      <td>lauren@gmail.com</td>
      <td>Where are my files?</td>
      <td class="text-center">
        <span class="badge badge-warning">New</span>
      </td>
      <td class="text-center">Dinesh Chugtai</td>
      <td class="text-center">18-11-2018</td>
      <td class="text-center">
        <span class="sr-only">Close</span>
        <a href="#">
          <img src="placeholder/icons/close.svg" alt="" height="25" width="25"/></a>
      </td>
      </tr><tr><td>349</td>
      <td>
        <a href="#">
          <img class="rounded-circle" src="placeholder/pictures/bg_circle.svg?primary=007bff" alt="" height="40" width="40"/>
          Kian Gray
        </a>
      </td>
      <td>kian.gray@gmail.com</td>
      <td>I can't send file to my friend</td>
      <td class="text-center">
        <span class="badge badge-success">Resolved</span>
      </td>
      <td class="text-center">Dinesh Chugtai</td>
      <td class="text-center">20-11-2018</td>
      <td class="text-center">
        <span class="sr-only">Close</span>
        <a href="#">
          <img src="placeholder/icons/close.svg" alt="" height="25" width="25"/></a>
      </td>
      </tr><tr><td>350</td>
      <td>
        <a href="#">
          <img class="rounded-circle" src="placeholder/pictures/bg_circle.svg?primary=007bff" alt="" height="40" width="40"/>
          Mollie Davey
        </a>
      </td>
      <td>mollie@davey.com</td>
      <td>Compressed files have low quality</td>
      <td class="text-center">
        <span class="badge badge-success">Resolved</span>
      </td>
      <td class="text-center">Dinesh Chugtai</td>
      <td class="text-center">21-11-2018</td>
      <td class="text-center">
        <span class="sr-only">Close</span>
        <a href="#">
          <img src="placeholder/icons/close.svg" alt="" height="25" width="25"/></a>
      </td>
      </tr><tr><td>351</td>
      <td>
        <a href="#">
          <img class="rounded-circle" src="placeholder/pictures/bg_circle.svg?primary=007bff" alt="" height="40" width="40"/>
          Josh Douglas
        </a>
      </td>
      <td>j.douglas@hotmail.com</td>
      <td>My phone won't turn on</td>
      <td class="text-center">
        <span class="badge badge-dark">Pending</span>
      </td>
      <td class="text-center">Dinesh Chugtai</td>
      <td class="text-center">22-11-2018</td>
      <td class="text-center">
        <span class="sr-only">Close</span>
        <a href="#">
          <img src="placeholder/icons/close.svg" alt="" height="25" width="25"/></a>
      </td>
      </tr><tr><td>352</td>
      <td>
        <a href="#">
          <img class="rounded-circle" src="placeholder/pictures/bg_circle.svg?primary=007bff" alt="" height="40" width="40"/>
          Jodie Field
        </a>
      </td>
      <td>jodie@field.com</td>
      <td>How to change e-mail??</td>
      <td class="text-center">
        <span class="badge badge-warning">New</span>
      </td>
      <td class="text-center">Dinesh Chugtai</td>
      <td class="text-center">22-11-2018</td>
      <td class="text-center">
        <span class="sr-only">Close</span>
        <a href="#">
          <img src="placeholder/icons/close.svg" alt="" height="25" width="25"/></a>
      </td>
      </tr><tr><td>353</td>
      <td>
        <a href="#">
          <img class="rounded-circle" src="placeholder/pictures/bg_circle.svg?primary=007bff" alt="" height="40" width="40"/>
          Taylor Gill
        </a>
      </td>
      <td>taylor.gill777@hotmail.com</td>
      <td>My files are corrupted</td>
      <td class="text-center">
        <span class="badge badge-success">Resolved</span>
      </td>
      <td class="text-center">Dinesh Chugtai</td>
      <td class="text-center">23-11-2018</td>
      <td class="text-center">
        <span class="sr-only">Close</span>
        <a href="#">
          <img src="placeholder/icons/close.svg" alt="" height="25" width="25"/></a>
      </td>
      </tr></tbody></table></div>
  </div>
</section>
};

export default QuestionList;