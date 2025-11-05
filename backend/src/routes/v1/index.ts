import { Router } from 'express';
import externalRoutes from './externalRoutes';
import internalRoutes from './internalRoutes';

const router = Router();

/**
 * @remarks External (public) routes - /api/v1/external/...
 * These routes are accessible without authentication
 */
router.use('/external', externalRoutes);

/**
 * @remarks Internal (authenticated) routes - /api/v1/internal/...
 * These routes require authentication
 */
router.use('/internal', internalRoutes);

export default router;
