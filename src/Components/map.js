import React, { useEffect } from "react";

export function Map() {
    useEffect(() => {
        const loadScript = (url, callback) => {
            let script = document.createElement("script");
            script.src = url;
            script.async = true;
            script.defer = true;
            script.onload = callback;
            document.head.appendChild(script);
        };

        loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDrf-5uuId3YRNixe_uYp7bQrIsc32O-pc", () => {
            initMap();
        });

        const fetchDataAndTransform = async () => {
            const url =
                'https://hot-point.com.ua/index.php?route=api/shops&lang=ru-ru&login=hpShop&key=ZGjAxra4L2KBfQ4pImWhWU1U2PIyeLRa';

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Ошибка HTTP: ${response.status}`);
                }
                const data = await response.json();
                return transformData(data);
            } catch (error) {
                console.error('Произошла ошибка при получении данных:', error);
                return [];
            }
        };

        const transformData = (data) => {
            const transformedData = {};
            for (const shopId in data.shops) {
                const shop = data.shops[shopId];
                transformedData[shopId] = [];
                for (const regionId in shop.regions) {
                    const region = shop.regions[regionId];
                    if (shopId === '2') {
                        transformedData[shopId].push({
                            title: region.name,
                            lat: parseFloat(region.latitude),
                            lng: parseFloat(region.longitude),
                        });
                    }
                    for (const regionDataId in region.region_data) {
                        const regionData = region.region_data[regionDataId];
                        transformedData[shopId].push({
                            title: regionData.name,
                            lat: parseFloat(regionData.latitude),
                            lng: parseFloat(regionData.longitude),
                        });
                    }
                }
            }
            console.log('Transformed Data:', transformedData);
            return transformedData;
        };

        const initMap = async () => {
            const maps = [
                new window.google.maps.Map(document.getElementById('map'), {
                    zoom: 6,
                    center: { lat: 49.391650, lng: 30.603840 }
                }),
                new window.google.maps.Map(document.getElementById('map1'), {
                    zoom: 6,
                    center: { lat: 49.391650, lng: 30.603840 }
                }),
                new window.google.maps.Map(document.getElementById('map2'), {
                    zoom: 6,
                    center: { lat: 49.391650, lng: 30.603840 }
                }),
                new window.google.maps.Map(document.getElementById('map3'), {
                    zoom: 6,
                    center: { lat: 49.391650, lng: 30.603840 }
                })
            ];

            console.log('Maps initialized:', maps);

            const locationsData = await fetchDataAndTransform();
            const locations1 = locationsData['1'] || [];
            const locations2 = locationsData['2'] || [];
            const locations3 = locationsData['3'] || [];

            console.log('Locations1:', locations1);
            console.log('Locations2:', locations2);
            console.log('Locations3:', locations3);

            addMarkersToMap(maps[0], locations1);
            addMarkersToMap1(maps[1], locations2);
            addMarkersToMap2(maps[2], locations3);
            addAllMarkersToMap(maps[3], locations1, locations2, locations3);
        };

        const addMarkersToMap = (map, locations) => {
            const redIcon = 'https://maps.google.com/mapfiles/ms/icons/red-dot.png';
            locations.forEach((location) => {
                let marker = new window.google.maps.Marker({
                    position: { lat: location.lat, lng: location.lng },
                    map: map,
                    title: location.title,
                    icon: redIcon
                });

                let infowindow = new window.google.maps.InfoWindow({
                    content: location.title
                });

                marker.addListener('click', () => {
                    infowindow.open(map, marker);
                });
            });
        };

        const addMarkersToMap1 = (map, locations) => {
            const blueIcon = 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png';
            locations.forEach((location) => {
                let marker = new window.google.maps.Marker({
                    position: { lat: location.lat, lng: location.lng },
                    map: map,
                    title: location.title,
                    icon: blueIcon
                });

                let infowindow = new window.google.maps.InfoWindow({
                    content: location.title
                });

                marker.addListener('click', () => {
                    infowindow.open(map, marker);
                });
            });
        };

        const addMarkersToMap2 = (map, locations) => {
            const greenIcon = 'https://maps.google.com/mapfiles/ms/icons/green-dot.png';
            locations.forEach((location) => {
                let marker = new window.google.maps.Marker({
                    position: { lat: location.lat, lng: location.lng },
                    map: map,
                    title: location.title,
                    icon: greenIcon
                });

                let infowindow = new window.google.maps.InfoWindow({
                    content: location.title
                });

                marker.addListener('click', () => {
                    infowindow.open(map, marker);
                });
            });
        };

        const addAllMarkersToMap = (map, locations1, locations2, locations3) => {
            const redIcon = 'https://maps.google.com/mapfiles/ms/icons/red-dot.png';
            const blueIcon = 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png';
            const greenIcon = 'https://maps.google.com/mapfiles/ms/icons/green-dot.png';

            locations1.forEach((location) => {
                let marker = new window.google.maps.Marker({
                    position: { lat: location.lat, lng: location.lng },
                    map: map,
                    title: location.title,
                    icon: redIcon
                });

                let infowindow = new window.google.maps.InfoWindow({
                    content: location.title
                });

                marker.addListener('click', () => {
                    infowindow.open(map, marker);
                });
            });

            locations2.forEach((location) => {
                let marker = new window.google.maps.Marker({
                    position: { lat: location.lat, lng: location.lng },
                    map: map,
                    title: location.title,
                    icon: blueIcon
                });

                let infowindow = new window.google.maps.InfoWindow({
                    content: location.title
                });

                marker.addListener('click', () => {
                    infowindow.open(map, marker);
                });
            });

            locations3.forEach((location) => {
                let marker = new window.google.maps.Marker({
                    position: { lat: location.lat, lng: location.lng },
                    map: map,
                    title: location.title,
                    icon: greenIcon
                });

                let infowindow = new window.google.maps.InfoWindow({
                    content: location.title
                });

                marker.addListener('click', () => {
                    infowindow.open(map, marker);
                });
            });
        };

    }, []);

    return (
        <>
            <nav>
                <div className="container pt-5 mt-0 mt-md-2">
                    <h2 className="fh2 mont-extra-bold primary-color mb-3">Stores by region</h2>
                    <div className="nav nav-tabs nav-pills nav-fill bg-tab mb-5 nav-tabs-scrollable" id="nav-tab"
                         role="tablist">
                        <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-home"
                                type="button" role="tab" aria-controls="nav-home" aria-selected="true">Operating stores
                        </button>
                        <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-profile"
                                type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Future stores
                        </button>
                        <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-contact"
                                type="button" role="tab" aria-controls="nav-contact" aria-selected="false">We will be back
                        </button>
                        <button className="nav-link" id="nav-all-tab" data-bs-toggle="tab" data-bs-target="#nav-all"
                                type="button"
                                role="tab" aria-controls="nav-all" aria-selected="false">All stores
                        </button>
                    </div>
                </div>
            </nav>
            <div className="container">
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <div id="map" style={{ height: '700px', width: '100%' }}></div>
                    </div>
                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <div id="map1" style={{ height: '700px', width: '100%' }}></div>
                    </div>
                    <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                        <div id="map2" style={{ height: '700px', width: '100%' }}></div>
                    </div>
                    <div className="tab-pane fade" id="nav-all" role="tabpanel" aria-labelledby="nav-all-tab">
                        <div id="map3" style={{ height: '700px', width: '100%' }}></div>
                    </div>
                </div>
            </div>
            {/*<div className="card">*/}
            {/*    <div className="card-body">*/}
            {/*        <div className="row">*/}
            {/*            /!* The script functionality is now handled in useEffect *!/*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    );
}
