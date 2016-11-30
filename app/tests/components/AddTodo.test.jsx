var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');
var expect = require('expect');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
  it('should exist',() => {
    expect(AddTodo).toExist();
  });

  it('should call onAddTodo if text is entered', () => {
    var spy = expect.createSpy();
    var addTodoForm = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodoForm));

    // place text in the input form
    var newTodo = 'New Todo Item';
    addTodoForm.refs.todoText.value = newTodo;
    // simulate form submission
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(newTodo);
  });

  it('should not call onAddTodo if no text is entered', () => {
    var spy = expect.createSpy();
    var addTodoForm = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodoForm));

    // place text in the input form

    addTodoForm.refs.todoText.value = '';
    // simulate form submission
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
