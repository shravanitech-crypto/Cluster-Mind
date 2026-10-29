import { Route } from 'react-router-dom'
import MarketingLayout from '../layouts/MarketingLayout'
import OverviewPage from '../pages/marketing/OverviewPage'
import DatasetManagementPage from '../pages/marketing/DatasetManagementPage'
import BehaviourAnalysisPage from '../pages/marketing/BehaviourAnalysisPage'
import CustomerSegmentationPage from '../pages/marketing/CustomerSegmentationPage'
import RecommendationEnginePage from '../pages/marketing/RecommendationEnginePage'
import CampaignsPage from '../pages/marketing/CampaignsPage'
import OffersCouponsPage from '../pages/marketing/OffersCouponsPage'
import LoyaltyProgramsPage from '../pages/marketing/LoyaltyProgramsPage'
import CustomerTargetingPage from '../pages/marketing/CustomerTargetingPage'
import ReportsAnalyticsPage from '../pages/marketing/ReportsAnalyticsPage'
import ModelPerformancePage from '../pages/marketing/ModelPerformancePage'
import SettingsPage from '../pages/marketing/SettingsPage'

export default function marketingRoutes() {
  return (
    <Route path="/marketing" element={<MarketingLayout />}>
      <Route index element={<OverviewPage />} />
      <Route path="dataset" element={<DatasetManagementPage />} />
      <Route path="behaviour" element={<BehaviourAnalysisPage />} />
      <Route path="segmentation" element={<CustomerSegmentationPage />} />
      <Route path="recommendations" element={<RecommendationEnginePage />} />
      <Route path="campaigns" element={<CampaignsPage />} />
      <Route path="offers" element={<OffersCouponsPage />} />
      <Route path="loyalty" element={<LoyaltyProgramsPage />} />
      <Route path="targeting" element={<CustomerTargetingPage />} />
      <Route path="reports" element={<ReportsAnalyticsPage />} />
      <Route path="models" element={<ModelPerformancePage />} />
      <Route path="settings" element={<SettingsPage />} />
    </Route>
  )
}
