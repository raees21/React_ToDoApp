import NavValues from "../../helpers/navValues";

type INAV = {
    current: string;
    navigate: (navTo: string) => void;
}

export default INAV;