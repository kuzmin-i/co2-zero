import ItemA from "./itemA"

const ListTable = () => {
    return (
        <div className="listtable">
            <div className="listtable__top">
                <div className="listtable__title">2020 — Total reported emissions by Facility in million metric tons of CO2e</div>
                <div className="listtable__selectors">
                    <div className="listtable__viewby">View by</div>
                    <div className="listtable__selector">
                        <div className="listtable__selbtn">Geography</div>
                        <div className="listtable__selbtn selected">Facility</div>
                    </div>
                    <div className="listtable__vhr"/>
                    <div className="listtable__selector">
                        <div className="listtable__selbtn selected">Selected year</div>
                        <div className="listtable__selbtn">Changes</div>
                    </div>
                </div>
            </div>

            <div className="listtable__frame">

                <div className="listtable__framebox">
                    <div className="listtable__frametop">
                        <div className="listtable__firstcol">
                            <div className="listtable__firsttitle">Municipality</div>
                            <div className="listtable__vhra"/>
                        </div>
                        <div className="listtable__cols">
                            <div className="listtable__item">
                                <img src="/mainfilters/2.svg" loading="lazy" alt="" className="listtable__arricon"/>
                                <div className="listtable__tabtitle">Power plants</div>
                            </div>
                            <div className="listtable__item">
                                <img src="/mainfilters/2.svg" loading="lazy" alt="" className="listtable__arricon"/>
                                <div className="listtable__tabtitle">Petroleum and natural gas systems</div>
                            </div>
                            <div className="listtable__item">
                                <img src="/mainfilters/2.svg" loading="lazy" alt="" className="listtable__arricon"/>
                                <div className="listtable__tabtitle">Refineries</div>
                            </div>
                            <div className="listtable__item">
                                <img src="/mainfilters/2.svg" loading="lazy" alt="" className="listtable__arricon"/>
                                <div className="listtable__tabtitle">Chemicals</div>
                            </div>
                            <div className="listtable__item">
                                <img src="/mainfilters/2.svg" loading="lazy" alt="" className="listtable__arricon"/>
                                <div className="listtable__tabtitle">Minerals</div>
                            </div>
                            <div className="listtable__item">
                                <img src="/mainfilters/2.svg" loading="lazy" alt="" className="listtable__arricon"/>
                                <div className="listtable__tabtitle">Waste</div>
                            </div>
                            <div className="listtable__item">
                                <img src="/mainfilters/2.svg" loading="lazy" alt="" className="listtable__arricon"/>
                                <div className="listtable__tabtitle">Power plants</div>
                            </div>
                            <div className="listtable__item">
                                <img src="/mainfilters/2.svg" loading="lazy" alt="" className="listtable__arricon"/>
                                <div className="listtable__tabtitle">Power plants</div>
                            </div>
                            <div className="listtable__item">
                                <img src="/mainfilters/2.svg" loading="lazy" alt="" className="listtable__arricon"/>
                                <div className="listtable__tabtitle">Power plants</div>
                            </div>
                            <div className="listtable__item">
                                <img src="/mainfilters/2.svg" loading="lazy" alt="" className="listtable__arricon"/>
                                <div className="listtable__tabtitle">Power plants</div>
                            </div>
                        </div>
                    </div>
                    
                    <ItemA name="Poronayskoye"/>
                    <ItemA name="Anivskoye"/>
                    <ItemA name="Dolinskoye"/>
                    <ItemA name="Korsakovskoye"/>
                    <ItemA name="Krasnogorskoye"/>
                    <ItemA name="Makarovskoye"/>
                    <ItemA name="Nevelskoye"/>
                    <ItemA name="Noglikskoye"/>
                    <ItemA name="Okhinskoye"/>
                    <ItemA name="Yuzhno-Sakhalinskoye"/>
                    <ItemA name="Aleksandrovskoye"/>
                    <ItemA name="Smirnykhovskoye"/>
                    <ItemA name="Tymovskoye"/>
                    <ItemA name="Uglegorskoye"/>
                    <ItemA name="Kholmskoye"/>
                    <ItemA name="Yuzhno-Kurilskoye"/>
                    <ItemA name="Kurilskoye"/>
                    <ItemA name="Smirnykhovskoye"/>
                    <ItemA name="Tymovskoye"/>
                    <ItemA name="Uglegorskoye"/>
                    <ItemA name="Kholmskoye"/>
                    <ItemA name="Yuzhno-Kurilskoye"/>
                    <ItemA name="Kurilskoye"/>

                </div>

            </div>
        </div>
    )
}

export default ListTable