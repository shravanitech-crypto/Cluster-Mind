import AdminCustomer from './models/AdminCustomer.js'
import AdminOrder from './models/AdminOrder.js'
import AdminCampaign from './models/AdminCampaign.js'
import RefundRequest from './models/RefundRequest.js'
import FeedbackEntry from './models/FeedbackEntry.js'
import AppNotification from './models/AppNotification.js'
import TeamUser from './models/TeamUser.js'
import ActivityLog from './models/ActivityLog.js'
import MlModel from './models/MlModel.js'
import PredictionLog from './models/PredictionLog.js'
import {
  SEED_CUSTOMERS,
  SEED_ORDERS,
  SEED_REFUNDS,
  SEED_FEEDBACK,
  SEED_NOTIFICATIONS,
  SEED_CAMPAIGNS,
  SEED_TEAM_USERS,
  SEED_ACTIVITY_LOGS,
  SEED_ML_MODELS,
  SEED_PREDICTION_LOGS,
} from './data/adminData.js'

export async function seedAdminData() {
  console.log('Seeding admin dashboard data...')

  await AdminCustomer.deleteMany({})
  await AdminCustomer.insertMany(SEED_CUSTOMERS)

  await AdminOrder.deleteMany({})
  await AdminOrder.insertMany(SEED_ORDERS)

  await AdminCampaign.deleteMany({})
  await AdminCampaign.insertMany(SEED_CAMPAIGNS)

  await RefundRequest.deleteMany({})
  await RefundRequest.insertMany(SEED_REFUNDS)

  await FeedbackEntry.deleteMany({})
  await FeedbackEntry.insertMany(SEED_FEEDBACK)

  await AppNotification.deleteMany({})
  await AppNotification.insertMany(SEED_NOTIFICATIONS)

  await TeamUser.deleteMany({})
  await TeamUser.insertMany(SEED_TEAM_USERS)

  await ActivityLog.deleteMany({})
  await ActivityLog.insertMany(SEED_ACTIVITY_LOGS)

  await MlModel.deleteMany({})
  await MlModel.insertMany(SEED_ML_MODELS)

  await PredictionLog.deleteMany({})
  await PredictionLog.insertMany(SEED_PREDICTION_LOGS)
}