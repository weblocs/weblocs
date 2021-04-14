Blockly.Blocks["get_checkbox"] = {
  init: function () {
    this.appendValueInput("value")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("input on change");
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT);
    this.appendStatementInput("NAME").setCheck(null).appendField("do");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#939819");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["change_text"] = {
  init: function () {
    this.appendValueInput("text").setCheck(null).appendField("set text");
    this.appendValueInput("element")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("in");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["element"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldDropdown([
          ["class", "."],
          ["id", "#"],
          ["tag", ""],
          ["bloc", "bloc"]
        ]),
        "element"
      )
      .appendField(new Blockly.FieldTextInput("class-name"), "NAME");
    this.setOutput(true, null);
    this.setColour(150);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["range_slider_move"] = {
  init: function () {
    this.appendValueInput("move")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("range swiper");
    this.appendValueInput("name")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("input name");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#939819");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["add_class"] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ["Add", "addClass"],
        ["Remove", "removeClass"],
        ["Toggle", "toggleClass"]
      ]),
      "NAME"
    );
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("class")
      .appendField(new Blockly.FieldTextInput("default"), "add_class");
    this.appendValueInput("trigger_class")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("to/from");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("only child")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "child");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["airtable"] = {
  init: function () {
    this.appendDummyInput().appendField("airtable create row");
    this.appendStatementInput("fields").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["airtable_field"] = {
  init: function () {
    this.appendValueInput("field").setCheck(null).appendField("field");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["submit"] = {
  init: function () {
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField("submit");
    this.appendStatementInput("NAME")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldTextInput("form"), "form");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#939819");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["get_data"] = {
  init: function () {
    this.appendValueInput("var")
      .setCheck(null)
      .appendField("create airtable list");
    this.appendStatementInput("fields").setCheck(null);
    this.appendStatementInput("do").setCheck(null).appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["get_field"] = {
  init: function () {
    this.appendValueInput("NAME").setCheck(null).appendField("get field");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["get_parametr"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("get parametr")
      .appendField(new Blockly.FieldTextInput("parametr"), "parametr");
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["mouse_event"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("On")
      .appendField(
        new Blockly.FieldDropdown([
          ["click", "click"],
          ["mouseover", "mouseover"],
          ["mouseout", "mouseout"],
          ["change", "change"]
        ]),
        "on"
      )
      .appendField("into");
    this.appendValueInput("into").setCheck(null);
    this.appendStatementInput("NAME").setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["set_css"] = {
  init: function () {
    this.appendStatementInput("css").setCheck(null).appendField("Set CSS");
    this.appendValueInput("to")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("to");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["css_value"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldDropdown([
          ["Opacity", "opacity"],
          ["Background Color", "background-color"],
          ["Font Size", "font-size"],
          ["Display", "display"]
        ]),
        "NAME"
      )
      .appendField(new Blockly.FieldTextInput("0"), "value");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["animate"] = {
  init: function () {
    this.appendDummyInput().appendField("animate");
    this.appendStatementInput("animate").setCheck(null);
    this.appendValueInput("timing")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("timing [ms]");
    this.appendValueInput("delay")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("delay [ms]");
    this.appendValueInput("function")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("easing");
    this.appendValueInput("element")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("element");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("queue")
      .appendField(new Blockly.FieldCheckbox("TRUE"), "queue");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["animation"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput("property"), "property")
      .appendField(new Blockly.FieldTextInput("value"), "value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["animation_easing"] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldTextInput("linear"),
      "easing"
    );
    this.setOutput(true, null);
    this.setColour(0);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["animation_property"] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ["opacity", "opacity"],
        ["backgroundPositionX", "backgroundPositionX"],
        ["backgroundPositionY", "backgroundPositionY"],
        ["borderWidth", "borderWidth"],
        ["borderBottomWidth", "borderBottomWidth"],
        ["borderLeftWidth", "borderLeftWidth"],
        ["borderRightWidth", "borderRightWidth"],
        ["borderTopWidth", "borderTopWidth"],
        ["borderSpacing", "borderSpacing"],
        ["margin", "margin"],
        ["marginBottom", "marginBottom"],
        ["marginLeft", "marginLeft"],
        ["marginRight", "marginRight"],
        ["marginTop", "marginTop"],
        ["opacity", "opacity"],
        ["outlineWidth", "outlineWidth"],
        ["padding", "padding"],
        ["paddingBottom", "paddingBottom"],
        ["paddingLeft", "paddingLeft"],
        ["paddingRight", "paddingRight"],
        ["paddingTop", "paddingTop"],
        ["height", "height"],
        ["width", "width"],
        ["maxHeight", "maxHeight"],
        ["maxWidth", "maxWidth"],
        ["minHeight", "minHeight"],
        ["minWidth", "minWidth"],
        ["fontSize", "fontSize"],
        ["bottom", "bottom"],
        ["left", "left"],
        ["right", "right"],
        ["top", "top"],
        ["letterSpacing", "letterSpacing"],
        ["wordSpacing", "wordSpacing"],
        ["lineHeight", "lineHeight"],
        ["textIndent", "textIndent"],
        ["translateX", "translateX"],
        ["translateY", "translateY"]
      ]),
      "property"
    );
    this.appendValueInput("NAME").setCheck(null);
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ["", ""],
        ["px", "px"],
        ["%", "%"],
        ["vh", "vh"],
        ["vw", "vw"]
      ]),
      "after_value"
    );
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["airtable_update"] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck(null)
      .appendField("airtable update row");
    this.appendStatementInput("fields").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["airtable_delete_row"] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck(null)
      .appendField("airtable delete row");
    this.appendDummyInput().appendField("do after delete");
    this.appendStatementInput("function").setCheck(null);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["get_single_airtable"] = {
  init: function () {
    this.appendValueInput("id")
      .setCheck(null)
      .appendField("get single data from");
    this.appendStatementInput("action").setCheck(null);
    this.appendDummyInput().appendField("do when data is loaded");
    this.appendStatementInput("do").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["get_single_field"] = {
  init: function () {
    this.appendValueInput("field")
      .setCheck(null)
      .appendField("get single field");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["get_key"] = {
  init: function () {
    this.appendValueInput("NAME").setCheck(null).appendField("get key");
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["get_text"] = {
  init: function () {
    this.appendValueInput("NAME").setCheck(null).appendField("get text");
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["this"] = {
  init: function () {
    this.appendDummyInput().appendField("this");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(150);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["to_number"] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck(null)
      .appendField("change into number");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["airtable_url"] = {
  init: function () {
    this.appendDummyInput().appendField("airtable");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_LEFT)
      .appendField("base")
      .appendField(new Blockly.FieldTextInput("base"), "base");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_LEFT)
      .appendField("table")
      .appendField(new Blockly.FieldTextInput("table"), "table");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_LEFT)
      .appendField("key")
      .appendField(new Blockly.FieldTextInput("key"), "key");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["draft"] = {
  init: function () {
    this.appendDummyInput().appendField("draft");
    this.appendStatementInput("draft").setCheck(null);
    this.setColour("#444");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["get_value_from_key"] = {
  init: function () {
    this.appendValueInput("value")
      .setCheck(null)
      .appendField("get value from item");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["update_list"] = {
  init: function () {
    this.appendValueInput("NAME").setCheck(null).appendField("update list");
    this.appendStatementInput("fields").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["update_list_field"] = {
  init: function () {
    this.appendValueInput("field")
      .setCheck(null)
      .appendField("update list field");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["update_airtable_list"] = {
  init: function () {
    this.appendValueInput("value")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("airtable list value");
    this.appendValueInput("update")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("update to");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["tutorial"] = {
  init: function () {
    this.appendDummyInput().appendField("tutorial");
    this.setColour(150);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["cloneable"] = {
  init: function () {
    this.appendDummyInput().appendField("cloneable");
    this.setColour(150);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["get_cookie"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("get cookie value")
      .appendField(new Blockly.FieldTextInput("cookieName"), "cookieName");
    this.setOutput(true, null);
    this.setColour(150);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["set_cookies"] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck(null)
      .appendField("set cookie")
      .appendField(new Blockly.FieldTextInput("cookieName"), "cookieName")
      .appendField("value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["undefined"] = {
  init: function () {
    this.appendDummyInput().appendField("undefined");
    this.setOutput(true, null);
    this.setColour(150);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["set_value"] = {
  init: function () {
    this.appendValueInput("value")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("update value in input");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#939819");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["set_cookie_value"] = {
  init: function () {
    this.appendValueInput("cookie").setCheck(null).appendField("set local");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["get_cookie_value"] = {
  init: function () {
    this.appendValueInput("cookie").setCheck(null).appendField("get local");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["input_function"] = {
  init: function () {
    this.appendDummyInput().appendField("input function");
    this.appendStatementInput("NAME").setCheck(null);
    this.setColour(45);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["input_trigger"] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck(null)
      .appendField("input function trigger");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["input_on_change"] = {
  init: function () {
    this.appendDummyInput().appendField("input");
    this.setOutput(true, null);
    this.setColour(45);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["set_input_on_change"] = {
  init: function () {
    this.appendValueInput("NAME").setCheck(null).appendField("set input");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["get_input_value"] = {
  init: function () {
    this.appendValueInput("value")
      .setCheck(null)
      .appendField("get input value");
    this.setOutput(true, null);
    this.setColour(45);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["duplicate_code_using_list"] = {
  init: function () {
    this.appendDummyInput().appendField("duplicate using list of inputs");
    this.appendStatementInput("code").setCheck(null);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["list_of_inputs"] = {
  init: function () {
    this.appendValueInput("inputs")
      .setCheck(null)
      .appendField("list of inputs");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["reload_page"] = {
  init: function () {
    this.appendDummyInput().appendField("reload page");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["create_list_related"] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck(null)
      .appendField("create airtable list");
    this.appendValueInput("id")
      .setCheck(null)
      .appendField("related with")
      .appendField(new Blockly.FieldTextInput("Table"), "table")
      .appendField("item");
    this.appendStatementInput("fields").setCheck(null);
    this.appendDummyInput().appendField("do when loaded");
    this.appendStatementInput("do").setCheck(null);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["change_table"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("change table")
      .appendField(new Blockly.FieldTextInput("Table"), "table");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["browser_language"] = {
  init: function () {
    this.appendDummyInput().appendField("browser language");
    this.setOutput(true, null);
    this.setColour(150);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["in_list_get"] = {
  init: function () {
    this.appendValueInput("list").setCheck(null).appendField("in list");
    this.appendValueInput("value1").setCheck(null).appendField("get");
    this.appendValueInput("value2").setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["do_for_each"] = {
  init: function () {
    this.appendValueInput("element").setCheck(null).appendField("do for each");
    this.appendStatementInput("do").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["change_in_text"] = {
  init: function () {
    this.appendValueInput("element").setCheck(null).appendField("in text");
    this.appendValueInput("change").setCheck(null).appendField("change");
    this.appendValueInput("into").setCheck(null).appendField("into");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["set_text"] = {
  init: function () {
    this.appendValueInput("element").setCheck(null).appendField("in");
    this.appendValueInput("text").setCheck(null).appendField("set text");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["get_releted_field"] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck(null)
      .appendField("get releted field");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["get_attr"] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck(null)
      .appendField("get attribute")
      .appendField(new Blockly.FieldTextInput("attribute"), "attribute")
      .appendField("from");
    this.setOutput(true, null);
    this.setColour(150);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["redirect_to"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("redirect to")
      .appendField(new Blockly.FieldTextInput("page"), "page");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["do_for_every_element_in_table"] = {
  init: function () {
    this.appendValueInput("table")
      .setCheck(null)
      .appendField("do for every row in table");
    this.appendStatementInput("do").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["get_script"] = {
  init: function () {
    this.appendValueInput("script").setCheck(null).appendField("get script");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["get_value_from_row"] = {
  init: function () {
    this.appendValueInput("value")
      .setCheck(null)
      .appendField("get value from row");
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["get_id_from_row"] = {
  init: function () {
    this.appendDummyInput().appendField("get id from row");
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["add_user_field"] = {
  init: function () {
    this.appendValueInput("user")
      .setCheck(null)
      .appendField("in row add user id");
    this.appendValueInput("field").setCheck(null).appendField("to field");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
