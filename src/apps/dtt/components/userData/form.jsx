import { Button, TextArea } from "../../ui-components/index";
import demo from "./demo.txt"
import React from 'react'
import { validateData } from './validateData'

export const Form = ({
    onSumit = () => { }
}) => {

    return (
        <div className="container">
            <label>Enter data according to acceptable format ...</label>
            <br />
            <TextArea
                id="userData_textArea"
            />
            <br />
            <input id="userData_inputFile" type="file" onChange={fileUpload} />
            <br />
            <Button
                id="userData_go_button"
                label="Go"
                onClick={() => {
                    onSumit(validateData(document.getElementById("userData_textArea").value))

                }}
                style={{
                    float: "left",
                    marginLeft: "5%",
                    marginRight: "2%",
                    marginTop: "2%",
                    background: "#C93A1D"
                }}
            />
            <Button
                type="reset"
                label="Reset"
                onClick={() => {
                    document.getElementById("userData_textArea").value = ""
                    document.getElementById("userData_inputFile").value = "";
                }}
                style={{ float: "left", marginTop: "2%", marginRight: "2%" }}
            />
            <Button
                label="Demo"
                onClick={() => {
                    //let file = URL.createObjectURL(demo);
                    //console.log(demo)
                    var rawFile = new XMLHttpRequest();
                    rawFile.open("GET", demo, false);
                    rawFile.onreadystatechange = function () {
                        if (rawFile.readyState === 4) {
                            if (rawFile.status === 200 || rawFile.status === 0) {
                                //console.log(rawFile.responseText)
                                document.getElementById("userData_textArea").value = rawFile.responseText

                            }
                        }
                    }
                    rawFile.send(null);
                }}
                style={{ marginTop: "2%" }}
            />
        </div>
    );
}

function readFile(file) {
    let reader = new FileReader();
    reader.onload = function () {
        document.getElementById('userData_textArea')
            .textContent = reader.result;
    }
    reader.readAsText(file);
}

function fileUpload(e) {
    e.stopPropagation();
    e.preventDefault();

    let fileInput = document.getElementById("userData_inputFile");
    let fileRoute = fileInput.value;
    let allowExt = /(.json|.tsv|.csv)$/;

    if (!allowExt.exec(fileRoute)) {
        alert(
            "Check the extension of the files to upload. You can only upload files with extensions: .json .tsv.csv)"
        );
        fileInput.value = "";
        return false;
    } {
        let files = e.target.files;
        //console.log(files[0].type);
        try {
            if (Math.round(files[0].size / 1000) < 10240) {
                readFile(files[0])
            } else {
                alert("Unsupported file size");
            }
        } catch (error) {
            console.error("no select file: " + error);
        }
    }
}
