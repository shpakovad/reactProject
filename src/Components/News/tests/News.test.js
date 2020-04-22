import React from "react";
import {create} from "react-test-renderer";
import NewsItem from "../NewsItem";


describe('News Component', () => {
    // test('should be result', () => {
    //     debugger
    //     const component = renderer.create(
    //             <News results ={[]} />
    //     );
    //     debugger
    //     const instance = component.getInstance();
    //     expect(instance).toStrictEqual([]);
    // });
    // test('after creation div should displayed with results', () => {
    //     const component = create(<News />);
    //     const root = component.root;
    //     let div = root.findByType('div');
    //     expect(div).not.toBeNull();
    // });
    test('should be title', () => {
        const component = create(<NewsItem title='news title'/>);
        const instance = component.getInstance();
        expect(instance.props.title).toBe('news title');
    });
    test('should be img src = nyt_logo.jpg', () => {
        const component = create(<NewsItem/>);
        const root = component.root;
        const image = root.findByType('img');
        expect(image._fiber.pendingProps.src).toBe('nyt_logo.jpg');
    });
});



