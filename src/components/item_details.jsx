import React from 'react';  
import Button from'./item_actions.jsx';
var ItemDetails = ({data}) => (

          <div>
            <table className="table">
              <tbody>
                <tr>
                  <th>price</th>
                  <td>{data.price} $</td>
                </tr>
                <tr>
                  <th>more info...</th>
                  <td>{data.extraInfo}</td>
                </tr>
              </tbody>
            </table>
            <Button label="Add" icon="shopping-cart" className="btn btn-success btn-block"/>
          </div>
          )
export default ItemDetails;