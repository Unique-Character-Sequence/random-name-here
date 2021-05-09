import Profile__menu_topInfo_status from "./Profile__menu_topInfo_status";
import Enzyme, {shallow, render, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from "enzyme-to-json";
import renderer from 'react-test-renderer';
Enzyme.configure({ adapter: new Adapter() });

describe("Profile__menu_topInfo_status component", () => {
    test("status from props should be in state", () => {
        const component = renderer.create(<Profile__menu_topInfo_status/>)
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
            // Не работает. Надо разобраться
    });
});