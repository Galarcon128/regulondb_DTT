import React, { Component } from "react";
import { IconButton } from "../../ui-components/index";
import { DNAfeatures } from '../../tools/dnaFeaturesGL/dna_features'
import { dataA } from "../../conf/ge_overlapHorizontal";

class DttGraphic extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const {
      dnaFeatures_data,
      id_canvas
    } = this.props

    console.log(dnaFeatures_data)
    console.log(dataA)

    return (
      <div className="container">
        <table>
          <caption>
            <h1>DTT Results</h1>
          </caption>
          <tbody>
            <tr>
              <th>
                <IconButton
                  icon="add"
                  style={{
                    background: "#000",
                    float: "left",
                    marginRight: "1%"
                  }}
                />
                <IconButton
                  icon="remove"
                  style={{
                    background: "#000",
                    float: "left",
                    marginRight: "1%"
                  }}
                />
                <IconButton
                  icon="crop_free"
                  style={{
                    background: "#000",
                    float: "left",
                    marginRight: "1%"
                  }}
                />
                <IconButton
                  icon="
                  cloud_download"
                  style={{
                    background: "#000",
                    float: "right",
                    marginRight: "1%"
                  }}
                />
                <a
                  style={{
                    float: "right",
                    marginRight: "1%",
                    marginTop: "1%"
                  }}
                  href="./CodeColors"
                >
                  Help
                </a>
              </th>
            </tr>
            <tr>
              <td>
                <div id={`divCanvas_${id_canvas}`}>
                  <DNAfeatures
                    id_drawPlace={`divCanvas_${id_canvas}`}
                    id_canvas={id_canvas}
                    dnaFeatures_data={dnaFeatures_data}
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default DttGraphic;
