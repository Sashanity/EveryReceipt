import React, { Component } from "react";
import { View, TextInput, Button, ScrollView, Alert } from "react-native";
import { styles } from "./styles";
import { addExpense } from "../../actions/expenseActions";
import { connect } from "react-redux";
import CommonButton from "./CommonButton";
import AddItemButton from "../ItemEntry/AddItemButton";





export default class FormFields extends Component {
  constructor(props) {
    super(props);
    this.manualInput = false;
    this.total = 0;
    this.editOn = false;
    this.state = {
      pairCount: 0,
      store: "",
      total: 0,
      fields: [
        { name: "Store Name", id: "store" },
        { name: "Items", id: "items" },
        { name: "Total Amount", id: "total" },
      ],
      items: [{}]
    };
  }

  resetForm() {
    this.manualInput = false;
    this.total = 0;
    this.setState({
      pairCount: 0,
      store: "",
      fields: [
        { name: "Store Name", id: "store" },
        { name: "Items", id: "items" },
        { name: "Total Amount", id: "total" },
      ],
      items: [{}]
    });
  }

  handleChange(id, val) {
    //console.log("call handleChange()")
    if (id === "total") {
      this.total = val;
      this.manualInput = true;
    }
    this.setState({
      [id]: val
    });

  }

  componentDidMount() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    this.ensureValesSaved();
  }

  ensureValesSaved() {
    if(this.props.editActive && this.props.expense.items.length !== 0)
    { 
=======
=======
    console.log("call componentDidMount")
>>>>>>> totalUpdate update
=======
    // console.log("call componentDidMount")
>>>>>>> ss
    if (this.props.editActive && this.props.expense.items.length !== 0) {
>>>>>>> total update that doent work
      this.setState({
        store: this.props.expense.store,
        total: this.props.expense.total,
        items: this.props.expense.items,
        pairCount: this.props.expense.items.length
      });
    }
    else if(this.props.fromOCR)
    {
      this.setState({
        store: this.props.expense.store,
        total: this.props.expense.total
      });
    }
  }


  handleItemChange(index, type, val) {
    if (type === "price") {
      this.manualInput = false;
    }
    let temp = [...this.state.items];
    if (type === "item") {
      temp[index].name = val;
    } else {
      temp[index].price = parseFloat(val).toFixed(2);
    }
    this.setState({
      items: temp
    });
  }

  addItemToDB() {
<<<<<<< HEAD
    const { items, store, total } = this.state;
    let expenseItems = [];
    let valid = true;
    for(let i = 0; i < items.length; i++) {
      if(typeof items[i].name !== "undefined" && 
        typeof items[i].price !== "undefined") {
        expenseItems.push(items[i]);
      }
    }
    if(typeof store === "undefined" || store === "" 
    || total === 0 || total === "") {
      valid = false;
    }

    if(valid) {
      let itemObj = {
        store: this.state.store,
        items: expenseItems,
        total: parseFloat(this.state.total).toFixed(2)
      };
      this.props.submit(itemObj);
    } else {
      this.props.error();
    }

=======
    let itemObj = {
      store: this.state.store,
      items: this.state.items,
      total: parseFloat(this.total).toFixed(2)
      // total: parseFloat(this.state.total).toFixed(2)
    };
<<<<<<< HEAD
    this.resetForm();
    this.props.submit(itemObj);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> working Total Amount
=======
=======
    // this.resetForm();
=======

>>>>>>> totalUpdate update

>>>>>>> totalUpdate
=======

    this.props.submit(itemObj);
    Alert.alert(
      "Success!",
      "Receipt added to your list",
      [
        { text: "OK", onPress: "" },
      ],
      { cancelable: false }
    );

    this.resetForm();
    // console.log(this.state.items)
>>>>>>> fixed UI in editing mode, added little UI improvements

>>>>>>> improvments for totalUpdate
  }

  generateKeyOrValueInputs(isKey) {

    console.log("call generateKeyOrValueInputs(isKey) ")

    let inputType = (isKey ? "Item name" : "Price");
    let inputId = (isKey ? "item" : "price");
    let inputElements = [];
    let tmpPrice = 0;


    if (this.props.editActive && this.props.expense.items.length !== 0) {
      this.editOn = true;

      for (let i = 0; i < this.state.pairCount; i++) {

        inputElements.push(<TextInput
          placeholder={`${inputType} ${i}`}
          defaultValue={ //sets the names and prices of the existing entries
            this.props.editActive && i < this.props.expense.items.length ?
              isKey ?
                this.props.expense.items[i].name
                : this.props.expense.items[i].price
              : ""}
          id={inputId}
          name={i}
          key={`${inputId}-${i}`}
          onChangeText={(text) => this.handleItemChange(i, inputId, text)}
        />);


      }
    } else {
      for (let i = 0; i < this.state.pairCount + 1; i++) {

        inputElements.push(<TextInput
          placeholder={`${inputType} ${i + 1}`}
          id={inputId}
          name={i}
          key={`${inputId}-${i}`}
          onChangeText={(text) => this.handleItemChange(i, inputId, text)}
        />);
      }
    }

    if (this.editOn === true) {
      this.total ? this.props.expense.total = this.total : "";
    }

    //updating the name of the total field aka updating UI

    if (this.manualInput === false) {
      if (inputId === "price") {
        for (let i = 0; i < this.state.items.length; i++) {
          tmpPrice = Number(tmpPrice) + Number(this.state.items[i].price);
        }
        this.total = tmpPrice;
        for (i = 0; i < this.state.fields.length; i++) {
          if (this.state.fields[i].id === "total") {
            this.total ? this.state.fields[i].name = this.total.toString() : "";
          }
        }
      }
    }

    return inputElements;
  }

  addKeyValuePair() {
    let oldItems = [...this.state.items];
    oldItems.push({});
    this.setState({
      items: oldItems,
      pairCount: this.state.pairCount + 1,
    });
  }

  renderItemsEntry() {
    let entries = [1, 0];
    return (
      <React.Fragment key={"items-entry"}>
<<<<<<< HEAD
<<<<<<< HEAD
        <View style={styles.row}>
          {entries.map((x) => {
            return ( 
=======
<<<<<<< HEAD
=======
>>>>>>> s
        <ScrollView>
          <View style={styles.row}>
            {entries.map((x) => {
              return (
                <View key={x} style={styles.col}>
                  {this.generateKeyOrValueInputs(x)}
                </View>
              );
            })}
          </View>
        </ScrollView>
<<<<<<< HEAD
=======
        <View style={styles.row}>
          {entries.map((x) => {
            return (
>>>>>>> total update that doent work
              <View key={x} style={styles.col}>
                {this.generateKeyOrValueInputs(x)}
              </View>
            );
          })}
        </View>
<<<<<<< HEAD
=======
>>>>>>> total update that doent work
>>>>>>> total update that doent work
=======
>>>>>>> s
        <View style={styles.row}>
          <AddItemButton
            onPress={this.addKeyValuePair.bind(this)}
            title="Add Item"
            text="Add Item"
          />
        </View>
      </React.Fragment>
    );
  }

  render() {
    return (
      <View style={styles.col}>

        {this.state.fields.map((f) => {
          return (
            f.id !== "items" ?
              <TextInput
                key={f.id}
                style={styles.input}
                defaultValue={this.props.editActive || this.props.fromOCR
                  ? this.props.expense[f.id] : ""}
                textAlign="center"
                underlineColorAndroid="transparent"
                placeholder={f.name}
                onChangeText={(text) => this.handleChange(f.id, text)}
              />
              :
              this.renderItemsEntry()
          );
        })}
        <CommonButton
          text={this.props.submitText ? this.props.submitText : "Submit"}
          onPress={this.addItemToDB.bind(this)}
        />
      </View>
    );
  }
}


