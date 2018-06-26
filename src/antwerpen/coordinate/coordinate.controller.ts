import { NextFunction, Request, Response } from 'express';

import { LocationItem } from '../../types';
import { CoordinateService } from './coordinate.service';
import { CoordinateServiceConfig } from '../types';

const coordinateSearchController = (config: CoordinateServiceConfig) => {
    const service = new CoordinateService(config);
    return (req: Request, res: Response, next: NextFunction) => {
        service.getLocation(req.query.lng, req.query.lat).then((result: LocationItem) => {
            res.json({ location: result });
        }).catch((error: any) => {
            next(error);
        });
    };
};

export = coordinateSearchController;
