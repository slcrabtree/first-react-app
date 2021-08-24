import React, { useState } from "react";
import "./DrugDetails.css";

function componentDidMount() {
    fetch("https://rxnav.nlm.nih.gov/REST/rxcui/rxcui/ndcs.xml")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }