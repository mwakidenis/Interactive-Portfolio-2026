 {/* FEATURES (SERVICES STYLE) */}
      <section>
        <div className="container">

          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>
            What I Do
          </h2>

          <div className="grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2rem'
            }}
          >
            {features.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedFeature(item)}
                className="card"
                style={{
                  padding: '2rem',
                  borderRadius: '1rem',
                  border: '1px solid #333',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  background: '#111'
                }}
              >
                {/* Glow */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: `radial-gradient(circle at center, ${item.color}20 0%, transparent 70%)`,
                    opacity: 0.2
                  }}
                />

                <item.icon size={30} color={item.color} />

                <h3 style={{ marginTop: '1rem' }}>{item.title}</h3>

                <p style={{ color: '#aaa', fontSize: '0.9rem' }}>
                  {item.description}
                </p>

                <span style={{ color: item.color, fontSize: '0.8rem' }}>
                  Learn more →
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL (LIKE SERVICES PAGE) */}
      <AnimatePresence>
        {selectedFeature && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedFeature(null)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
              zIndex: 999
            }}
          >

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '100%',
                maxWidth: '500px',
                background: '#111',
                borderRadius: '1rem',
                padding: '2rem',
                border: `1px solid ${selectedFeature.color}`
              }}
            >

              {/* Close */}
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h2>{selectedFeature.title}</h2>
                <X
                  style={{ cursor: 'pointer' }}
                  onClick={() => setSelectedFeature(null)}
                />
              </div>

              <p style={{ color: '#aaa', marginTop: '1rem' }}>
                {selectedFeature.description}
              </p>

              {/* FEATURES LIST */}
              <div style={{ marginTop: '1.5rem' }}>
                <h4>What's Included:</h4>

                {selectedFeature.features.map((f, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, marginTop: 10 }}>
                    <Check color={selectedFeature.color} size={18} />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              {/* BUTTON */}
              <button
                onClick={() => setSelectedFeature(null)}
                style={{
                  marginTop: '2rem',
                  width: '100%',
                  padding: '0.8rem',
                  background: selectedFeature.color,
                  border: 'none',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                Close
              </button>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}
