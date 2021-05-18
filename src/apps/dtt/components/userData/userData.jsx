/**

# Component (user guide)

# [FromUserData]
	
## Description  
	
FormUserData is a user interface where the user can 
load a document to graph the genetic elements contained
in the document.

## Category   
	
[Visual]  

## Live demo 
[-]

## Installation 
[-]

## Usage 
	
[<FormUserData />]

## Props 

| Attribute | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
|           |      |         |             |


## Exception

__Category: [Error, Warning or Message]__
[Description of the exception (if necessary)]

## License

MIT License

## Author 
	
RegulonDB Team: 
[Lizeth-Ariz]

# Component (technical guide)

## Component Type 

[HOC]

[stateful -> exportan funcion con estate y props, 
  stateless -> exportan funcion con props y sin state , 
  pure -> exporta una funcion sin props sin state, 
  HOC -> exporta una Funcion copuesta, o clase , 
  Hook -> exporta hook (react const) ]

## Dependencies

[import React, { Component } from "react";]
[import { Button, TextArea } from "./ui-components/index";]

## States
	
| Property | Value |          Desctiption           |
| -------- | ----- | -----------------------------  |
| dataText | String|  Updates state of the textarea |

# Functions description

## [handleSubmit]

__Description:__  

[Send the form information with the Go button]

__Usage:__

```javascript
onClick={this.handleSubmit}
```
## [handleInputChange]

__Description:__  

[Updates state of the textarea]

__Usage:__

```javascript
onChangeText={this.handleInputChange}
```
## [handleCatchFile]

__Description:__  

[Loads the demo document and displays it in the textarea with the Demo button]

__Usage:__

```javascript
onClick={this.handleCatchFile}
```
## [handleFileUpload]

__Description:__  

[Upload and validate the user's document with the upload file button]

__Usage:__

```javascript
onChange={this.handleFileUpload} 
```

__Scope: __

[Scope details]

__Input Parameter:__  
​__event:__ [Description]


__Return:__  
​__Void:__ []
imprime en consola: 
console.log("final data is", dataText);
​[Description (if necessary)]
 * 
 */

import React from 'react'
import {Form} from './form'

export function UserData() {
    return (
        <div>
            <Form />
        </div>
    )
}
