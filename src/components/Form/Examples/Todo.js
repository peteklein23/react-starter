import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';

// Here is an example of a form with an editable list.
// Next to each input are buttons for insert and remove.
// If the list is empty, there is a button to add an item.
const FriendList = () => (
  <div>
    <h1>Friend List</h1>
    <Formik
      initialValues={{
        friends: [
          { name: 'jared', age: 99 },
          { name: 'Ian', age: 77 },
          { name: 'brent', age: 22 }
        ]
      }}
      onSubmit={values =>
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        }, 500)
      }
      render={({ values }) => (
        <Form>
          <FieldArray
            name="friends"
            render={arrayHelpers => (
              <div>
                {values.friends.map((friend, index) => (
                  <div key={index}>
                    <Field name={`friends[${index}].name`} />
                    <Field name={`friends.${index}.age`} />
                    <button
                      type="button"
                      onClick={() => arrayHelpers.remove(index)}
                    >
                      -
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => arrayHelpers.push({ name: '', age: '' })}
                >
                  +
                </button>
              </div>
            )}
          />
        </Form>
      )}
    />
  </div>
);

export default FriendList;
