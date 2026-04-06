'use client';

import { useMemo } from 'react';
import { feature } from 'topojson-client';
import { geoNaturalEarth1, geoPath } from 'd3-geo';
import type { Feature, FeatureCollection, Geometry } from 'geojson';
import type { Topology } from 'topojson-specification';

// Natural Earth-derived public-domain data via world-atlas (Mike Bostock).
import countriesTopology from 'world-atlas/countries-110m.json';

export const OFFICE_MAP_VIEWBOX = { width: 1000, height: 520 } as const;

export function useOfficeWorldMap() {
    return useMemo(() => {
        const topology = countriesTopology as unknown as Topology;
        const geojson = feature(
            topology,
            topology.objects.countries,
        ) as FeatureCollection;

        const projection = geoNaturalEarth1();
        projection.fitSize(
            [OFFICE_MAP_VIEWBOX.width, OFFICE_MAP_VIEWBOX.height],
            geojson,
        );

        const path = geoPath(projection);

        const landPaths: { key: string; d: string }[] = [];
        for (let i = 0; i < geojson.features.length; i++) {
            const f = geojson.features[i];
            const d = path(f as Feature<Geometry | null>);
            if (d) {
                landPaths.push({ key: `land-${i}`, d });
            }
        }

        function project(lngLat: [number, number]): [number, number] {
            const p = projection(lngLat);
            return p ?? [0, 0];
        }

        return { landPaths, project };
    }, []);
}

type WorldMapOfficesSvgProps = {
    landPaths: { key: string; d: string }[];
    className?: string;
};

export function WorldMapOfficesSvg({ landPaths, className }: WorldMapOfficesSvgProps) {
    return (
        <svg
            viewBox={`0 0 ${OFFICE_MAP_VIEWBOX.width} ${OFFICE_MAP_VIEWBOX.height}`}
            className={className}
            fill="none"
            aria-hidden
        >
            {landPaths.map(({ key, d }) => (
                <path
                    key={key}
                    d={d}
                    fill="#D7DBDF"
                    stroke="#C5CAD0"
                    strokeWidth={0.35}
                />
            ))}
        </svg>
    );
}
