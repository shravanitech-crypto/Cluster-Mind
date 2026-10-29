import { Route } from 'react-router-dom'
import AdminLayout from '../layouts/AdminLayout'
import AdminOverviewPage from '../pages/admin/AdminOverviewPage'
import AdminCustomerManagementPage from '../pages/admin/AdminCustomerManagementPage'
import AdminProductManagementPage from '../pages/admin/AdminProductManagementPage'
import AdminOrderManagementPage from '../pages/admin/AdminOrderManagementPage'
import AdminBehaviourAnalysisPage from '../pages/admin/AdminBehaviourAnalysisPage'
import AdminSegmentationPage from '../pages/admin/AdminSegmentationPage'
import AdminRecommendationsPage from '../pages/admin/AdminRecommendationsPage'
import AdminModelManagementPage from '../pages/admin/AdminModelManagementPage'
import AdminMarketingManagementPage from '../pages/admin/AdminMarketingManagementPage'
import AdminReportsPage from '../pages/admin/AdminReportsPage'
import AdminNotificationsPage from '../pages/admin/AdminNotificationsPage'
import AdminFeedbackPage from '../pages/admin/AdminFeedbackPage'
import AdminUserManagementPage from '../pages/admin/AdminUserManagementPage'
import AdminSettingsPage from '../pages/admin/AdminSettingsPage'
import AdminProfilePage from '../pages/admin/AdminProfilePage'

export default function adminRoutes() {
  return (
    <Route path="/admin" element={<AdminLayout />}>
      <Route index element={<AdminOverviewPage />} />
      <Route path="customers" element={<AdminCustomerManagementPage />} />
      <Route path="products" element={<AdminProductManagementPage />} />
      <Route path="orders" element={<AdminOrderManagementPage />} />
      <Route path="behaviour" element={<AdminBehaviourAnalysisPage />} />
      <Route path="segmentation" element={<AdminSegmentationPage />} />
      <Route path="recommendations" element={<AdminRecommendationsPage />} />
      <Route path="models" element={<AdminModelManagementPage />} />
      <Route path="marketing" element={<AdminMarketingManagementPage />} />
      <Route path="reports" element={<AdminReportsPage />} />
      <Route path="notifications" element={<AdminNotificationsPage />} />
      <Route path="feedback" element={<AdminFeedbackPage />} />
      <Route path="users" element={<AdminUserManagementPage />} />
      <Route path="settings" element={<AdminSettingsPage />} />
      <Route path="profile" element={<AdminProfilePage />} />
    </Route>
  )
}
