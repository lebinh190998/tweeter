import React from 'react';
import TestRenderer from "react-test-renderer";
import InputForm from './inputForm';

const msg = "I can't believe Tweeter now supports chunking my messages, so I don't have to do it myself."
let props;
beforeEach(() => {
  props = {
    updateTweet: {}
  };
});

describe("<InputForm/>", () => {
    test("check if the message is splited", () => {
        const testRenderer = TestRenderer.create(<InputForm {...props.updateTweet} />);
        const testInstance = testRenderer.getInstance();
        const splitedMsg = testInstance.splitMsg(msg, 50);
        expect(splitedMsg).toStrictEqual(["1/2 I can't believe Tweeter now supports chunking my ", "2/2 messages, so I don't have to do it myself. "]);
    });
});