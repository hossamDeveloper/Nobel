import React, { useMemo, useState } from 'react'
import { applicationsList, applicationsNameMap, getApplicationDetails } from '../data/applications'
import { resolveAsset } from '../utils/assetResolver'
import { useLanguage } from '../utils/LanguageContext'
import { getTranslation } from '../utils/translations'

const Applications = () => {
	const defaultKey = 'Forced Draft'
	const [activeKey, setActiveKey] = useState(defaultKey)
	const { language, isArabic } = useLanguage()

	const mergedDetails = useMemo(() => getApplicationDetails(activeKey, isArabic), [activeKey, isArabic])

	return (
		<div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-8">
			<div className="text-center mb-8">
				<h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">{getTranslation('applicationsPageTitle', language)}</h1>
				<p className="mt-2 text-base md:text-lg text-gray-600">{getTranslation('applicationsPageSubtitle', language)}</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-5 gap-6">
				<aside className="md:col-span-1 bg-white rounded-md border border-gray-200">
					<h2 className="px-4 py-3 font-semibold text-gray-800 border-b">{getTranslation('applications', language)}</h2>
					<ul className="max-h-[70vh] overflow-auto">
						{applicationsList.map((name) => (
							<li key={name}>
								<button
									onClick={() => setActiveKey(name)}
									className={`w-full ${isArabic ? 'text-right' : 'text-left'} px-4 py-2 text-sm hover:bg-gray-50 focus:outline-none ${
										activeKey === name ? 'bg-gray-100 font-semibold text-blue-700' : 'text-gray-700'
									}`}
								>
									{isArabic ? (applicationsNameMap[name] || name) : name}
								</button>
							</li>
						))}
					</ul>
				</aside>

				<section className="md:col-span-4">
					<div className="mb-4">
						<h2 className="text-2xl font-bold text-gray-900">{isArabic ? (applicationsNameMap[activeKey] || activeKey) : activeKey}</h2>
					</div>
					<div className="bg-white rounded-md border border-gray-200 p-4 md:p-6">
						<div className="flex flex-col md:flex-row gap-4 md:gap-6">
							{mergedDetails?.image && (
								<div className="w-full md:w-96">
									<img
										src={resolveAsset(mergedDetails.image)}
										alt={mergedDetails.title}
										className="w-full h-72 object-cover rounded"
										onError={(e) => { e.currentTarget.style.display = 'none' }}
										loading="lazy"
										decoding="async"
										sizes="(max-width: 768px) 100vw, 18rem"
									/>
								</div>
							)}
							<div className="flex-1">
								<h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
									{mergedDetails?.title || (isArabic ? (applicationsNameMap[activeKey] || activeKey) : activeKey)}
								</h1>
								{mergedDetails?.intro && (
									<p className="text-gray-700 mb-3 leading-relaxed">{mergedDetails.intro}</p>
								)}
								{mergedDetails?.body && (
									<p className="text-gray-700 leading-relaxed">{mergedDetails.body}</p>
								)}
							</div>
						</div>

						<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
							{mergedDetails?.designFeatures && (
								<div>
									<h3 className="font-semibold text-gray-900 mb-3">{getTranslation('designFeatures', language)}</h3>
									<ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700 text-sm">
										{mergedDetails.designFeatures.map((f) => (
											<li key={f} className="flex items-start gap-2">
												<span className="mt-0.5 text-green-600">
													<svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
												</span>
												<span>{f}</span>
											</li>
										))}
									</ul>
								</div>
							)}

							{mergedDetails?.materials && (
								<div>
									<h3 className="font-semibold text-gray-900 mb-3">{getTranslation('availableMaterials', language)}</h3>
									<div className="flex flex-wrap gap-2">
										{mergedDetails.materials.map((m) => (
											<span key={m} className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700">
												{m}
											</span>
										))}
									</div>
								</div>
							)}

							{/* {details?.fanDesigns && (
								<div className="md:col-span-2">
									<h3 className="font-semibold text-gray-900 mb-3">Fan Designs</h3>
									<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
										{details.fanDesigns.map((d) => (
											<li key={d} className="bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-800 flex items-center justify-between hover:bg:white hover:shadow-sm transition">
												<span className="pr-2">{d}</span>
												<span className="text-gray-400">
													<svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/></svg>
												</span>
											</li>
										))}
									</ul>
								</div>
							)} */}
						</div>
					</div>
				</section>
			</div>

			{/* Floating Software Button */}
			<a
				href="https://software.nobeleng.com/"
				target="_blank"
				rel="noopener noreferrer"
				className={`fixed bottom-6 ${isArabic ? 'left-6' : 'right-6'} z-40 inline-flex items-center gap-2 px-4 py-2 rounded-full shadow-lg bg-blue-600 hover:bg-blue-700 text-white text-sm`}
			>
				{getTranslation('software', language)}
			</a>
		</div>
	)
}

export default Applications