import React from "react";
import styles from './main.module.css';

const Main = props => {
    return <main>
        <section className={styles['section-one']}>
            <h1>Responsive Sticky Navbar Sample</h1>
        </section>
        <section className={styles['section-two']}>
            <h2>Extra paragraph one</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut tellus elementum sagittis vitae et leo duis. Sed nisi lacus sed viverra tellus. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Nec nam aliquam sem et tortor consequat id porta nibh.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut tellus elementum sagittis vitae et leo duis. Sed nisi lacus sed viverra tellus. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Nec nam aliquam sem et tortor consequat id porta nibh.</p>
            <h2>Extra paragraph two</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet est placerat in egestas erat imperdiet sed. Massa tempor nec feugiat nisl. Ut tortor pretium viverra suspendisse. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Elementum tempus egestas sed sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut tellus elementum sagittis vitae et leo duis. Sed nisi lacus sed viverra tellus. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Nec nam aliquam sem et tortor consequat id porta nibh.</p>
        </section>
    </main>
}

export default Main;