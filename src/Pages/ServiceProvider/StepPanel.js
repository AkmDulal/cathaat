import React, { useState } from "react";
import { Button, Steps } from "antd";

const StepPanel = (props) => {
    const [activeStep, setActiveStep] = useState(0);

    function next(e) {
        const nextStep = activeStep + 1;
        console.log(Steps, "Steps Steps")
        setActiveStep(nextStep);
    }

    function prev() {
        const prevStep = activeStep - 1;
        setActiveStep(prevStep);
    }

    return (
        <>
            <Steps current={activeStep} style={{ width: 800 }}>
                {props.steps.map((item) => (
                    <Steps.Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <div className="steps-content">{props.steps[activeStep].content}</div>
            <div className="steps-action">
                {activeStep < props.steps.length - 1 && (
                    <Button className="fBtn" type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {activeStep === props.steps.length - 1 && (
                    <Button type="primary" htmlType="submit">
                        Done
                    </Button>
                )}
                {activeStep > 0 && (
                    <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                        Previous
                    </Button>
                )}
            </div>
        </>
    );
};

export { StepPanel };