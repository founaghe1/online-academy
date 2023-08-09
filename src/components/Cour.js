/** @format */

import React from "react";
import Table from "react-bootstrap/Table";
import { SiMaterialdesignicons } from "react-icons/si";
import { MdDeveloperMode } from "react-icons/md";
import { TbBrandPython } from "react-icons/tb";
import { BsFiletypeHtml } from "react-icons/bs";
import { DiJavascript1 } from "react-icons/di";

function Coure() {
  return (
    <>
      <h1 className=''>Mes Cours</h1>
      <div className='container'>
        <Table responsive className='table mt-5'>
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Debut</th>
              <th>Durée</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className=''>
                <div className='d-flex justify-content-evenly align-items-center'>
                  <div
                    className='icon1 icon d-flex justify-content-center align-items-center p-2  '
                    style={{ borderRadius: "8%" }}
                  >
                    <div>
                      <SiMaterialdesignicons className='fs-5  mb-1 sir' />
                    </div>
                  </div>
                  <div>
                    <p>
                      <span>Web Design</span>
                    </p>
                  </div>
                </div>
              </td>
              <td>8h 15mn</td>
              <td>15h</td>
              <td>
                <div className='d-flex justify-content-center gap-2 text-center  '>
                  <button type='button' className='btn btn-info'>
                    modifier
                  </button>
                  <button type='button' className='btn btn-danger'>
                    supprimer
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className=''>
                <div className='d-flex justify-content-evenly align-items-center  '>
                  <div
                    className='icon2 icon d-flex justify-content-center align-items-center p-2  ms-4 '
                    style={{ borderRadius: "8%" }}
                  >
                    <div>
                      <MdDeveloperMode className='fs-5  mb-1 sir1 ' />
                    </div>
                  </div>
                  <div>
                    <p>
                      <span>Development Basisc</span>
                    </p>
                  </div>
                </div>
              </td>
              <td>8h 15mn</td>
              <td>15h</td>
              <td>
                <div className='d-flex justify-content-center gap-2 text-center  '>
                  <button type='button' className='btn btn-info'>
                    modifier
                  </button>
                  <button type='button' className='btn btn-danger'>
                    supprimer
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className=''>
                <div className='d-flex justify-content-evenly align-items-center  '>
                  <div
                    className='icon3 icon d-flex justify-content-center align-items-center p-2  ms-3 '
                    style={{ borderRadius: "8%" }}
                  >
                    <div>
                      <TbBrandPython className='fs-5  mb-1 sir2 ' />
                    </div>
                  </div>
                  <div>
                    <p>
                      <span>Data with python</span>
                    </p>
                  </div>
                </div>
              </td>
              <td>8h 15mn</td>
              <td>15h</td>
              <td>
                <div className='d-flex justify-content-end gap-2 text-center  '>
                  <button type='button' className='btn btn-info'>
                    modifier
                  </button>
                  <button type='button' className='btn btn-danger'>
                    supprimer
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className=''>
                <div className='d-flex justify-content-evenly align-items-center  '>
                  <div
                    className='icon4 icon d-flex justify-content-center align-items-center p-2   '
                    style={{ borderRadius: "8%" }}
                  >
                    <div>
                      <BsFiletypeHtml className='fs-5  mb-1 sir3 ' />
                    </div>
                  </div>
                  <div>
                    <p>
                      <span>Html Basisc</span>
                    </p>
                  </div>
                </div>
              </td>
              <td>8h 15mn</td>
              <td>15h</td>
              <td>
                <div className='d-flex justify-content-end gap-2 text-center  '>
                  <button type='button' className='btn btn-info'>
                    modifier
                  </button>
                  <button type='button' className='btn btn-danger'>
                    supprimer
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className=''>
                <div className='d-flex justify-content-evenly align-items-center  '>
                  <div
                    className='icon5 icon d-flex justify-content-center align-items-center p-2 ms-2   '
                    style={{ borderRadius: "8%" }}
                  >
                    <div>
                      <DiJavascript1 className='fs-5  mb-1 sir4 ' />
                    </div>
                  </div>
                  <div>
                    <p>
                      <span>Javscript Basisc</span>
                    </p>
                  </div>
                </div>
              </td>
              <td>8h 15mn</td>
              <td>15h</td>
              <td>
                <div className='d-flex justify-content-end gap-2 text-center  '>
                  <button type='button' className='btn btn-info'>
                    modifier
                  </button>
                  <button type='button' className='btn btn-danger'>
                    supprimer
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Coure;
