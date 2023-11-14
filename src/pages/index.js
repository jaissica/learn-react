import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Profile from "./qcomps/profile_mistake.js";
import Firstcomp from "./qcomps/firstcomp.js";
import Bio from "./qcomps/bios.js";
import TodoList from "./qcomps/todos.js";
// import Gallery from "./qcomps/gallery_props.js";
import Square from "./components/square.js";
import PackingList from "./components/props_item.js";
// import List from "./qcomps/list_keys_id.js";
import RecipeList from "./qcomps/recipes.js";
import MenuBar from "./qcomps/menuBar.js";
import Gallery from "./qcomps/state.js";
import Form from "./qcomps/stuckForm.js";
import FeedbackForm from "./qcomps/thankYouCrash.js";
import Counter from "./components/snapshot.js";
import RequestTracker from "./qcomps/shoppingCart.js";
import Scoreboard from "./qcomps/updObjectsForm.js";
// import List from "./qcomps/artistsArr.js";
import List from "./qcomps/artistsRemoveArr.js";

export default function Home() {
    return (
        <div className={styles.main}>
            <List />
        </div>
    );
}
