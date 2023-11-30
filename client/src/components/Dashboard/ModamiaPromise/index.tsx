import HeadingUI from "shared/ui/HeadingUI/HeadingUI";


const ModamiaPromise = () => {
    return (
        <section className="modamia_promise_container">
          <HeadingUI text="THE MODAMIA PROMISE"/>
            <div className="modamia_promise_content">
                <div className="modamia_promise_items">
                    <div className="modamia_promise_item_img">
                        <img src="image/promise_1.webp" alt="" />
                        {/* <p>fit</p> */}
                    </div>
                    <div className="modamia_promise_item_texts">
                        <HeadingUI text="Our Perfect Fit Pledge"/>
                        <p>If it's not just right, we'll remake it or provide a full refund.</p>
                    </div>
                </div>
                <div className="modamia_promise_items">
                    <div className="modamia_promise_item_img">
                        <img src="image/promise_2.webp" alt="" />
                        {/* <p>Delivery for Clients</p> */}
                    </div>
                    <div className="modamia_promise_item_texts">
                    <HeadingUI text="Delivery that fits your schedule"/>
                     <p>Express: 2 weeks. Order today, delivery by Thursday, Dec 14</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ModamiaPromise;