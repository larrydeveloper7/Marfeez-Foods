import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {

  const specialOffers = [
    {
      title: "Pizza Night",
      description: "Enjoy our delicious pizzas at a special price every Tuesday.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxj-LpIBn9QDXwERfqurEtFaKQd94K_ry7AvDnjmOjRClChgyBF8WnIAc4H3BgGRFexuiAsALgA8-ETOJGxFBvLicBOM6APL-RBrnTdSS91r_bJbzQkHxVEUoguR4Zzuij3-n14PqbS0jTmI_tmcn3v0PU0rePBJlnEIZKzN2jArdcutKocH8-oT6CTcKfAx3gUApnPf4X8KNjaIv_EREa4PlmA95r_4mIj8gG-TfsaDBjj9ZWP8FQuRp50HuqXSj9FIJnEuhiGph2"
    },
    {
      title: "Pasta Perfection",
      description: "Indulge in our handcrafted pasta dishes with a complimentary glass of wine.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRutOugk7BhU62O639eEPdneDGv4_jelxshryZVjRlzUQK6p6S-QZ4U7w9vRcyAUSCBrHEMLJ_Odr4zoEKeuQefyEZ-CQU3MI3b-RnXFJzVieToJo03xk0-Ohb871nX2sybpiluV9aRCh3Pdii_pr0QgDXtyM-mDRtYhic4s_zvobgWZeBAzfzicScoeAmKKAaIM72N_YYHfDlOpLZPaYvcYtMr-LmHDufmJ_wI9H4-erF4k2I9YLvScYVUQE3DEB3poHdu5UP3Dre"
    },
    {
      title: "Fresh Salads",
      description: "Savor our fresh and vibrant salads made with locally sourced ingredients.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2NTtbAI_6uJD6TTOTti1Ejn-F_vmng_DkIRjuFrwdJEVbWt-cyEgHEHgLamVncui_Rl_osoySMkNfxzYmp14Ul6v278eDidhBxbzfEUxUGywNog1nmEELqDVEk9PJl36NcJhTpSvp2aryskvf8qIIuZxcvv4IiQjQYkLnICgmjNAC41h9vh042Ds60mmtuMiRrnW3Nl7w8IpI8ZlTfustjxh-6DJcqdyx73gNP0fD7y8A4jXfLYoQUrYQDHsymtDR1BGg0L_KkxY9"
    }
  ];

  const featuredDishes = [
    {
      title: "Grilled Salmon",
      description: "Freshly grilled salmon with a lemon-dill sauce, served with roasted vegetables.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFsAec88_lGWEbF6baysUt2TfHj7RAhOhAymiRAhVkoOhsjYaekFEgr7l7q24VeRC0ZRlkfiziopL3q3BiE2JTqLTPcTm2aSmMGfxc3unO1GNZTMGcxXPv_399BD2JKuRQU29FgR6G8z7q6Ebo0fg4yLTT3X9FDwwJGZs_17eovcRPGvSDkFxTkK4--GthjbnVcq-Nq_iQt0PCcTkMQmJ-FossOO-BqtJnqSFpv_pLjX66vQa_BYBoIpyc5QnzdGpkkXchkdkw3LYB"
    },
    {
      title: "Ribeye Steak",
      description: "Tender and juicy ribeye steak cooked to perfection, served with mashed potatoes and asparagus.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOCUNGFvqGQD8mL2aH9_qn48642q9yszQXfPIW8ykG1gxkpp7GTcDGEZk1muWLtD1xlh2tba_uQ4PAkLHLc-5csc6Nr3nk4sOdQteXMJG2FGcbRBb-eR0zEqdMI2gmHJUBwuf62_KTW9ALEwE5dpiGtCz6pldor_xjbRVHeYg5dvlklNaeaAOy1XyMznD5V5BJa2dNZlGHsgTpW8XFz2_UMZ6I2nNHYdQxOsKTQ9WjGOKkDLDpU8hus13ZEa2otNnGdjZ9pghN1NUQ"
    },
    {
      title: "Vegetarian Delight",
      description: "A medley of seasonal vegetables, grilled and seasoned, served with a side of quinoa.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvtiQItbxVQwVnLYLRU0d7Qy6yU3zPyGoYkN1XQOcETtKfxnzVXgtAd6I-r93xlHPUVl-T-wGY-genMYar0hdOXkA3mzVCmZtfChAPP8LT-7NdpbdBTjK2P_5TEc7h3NU5DUVqnt0ByKt3zaWjKhZjGTi6sURQ-kn9PG-dqJHtqmQkfjznWOiacBGjO2J-TrgbDKWe5VCbhtCxSZo6xstj38gftvr61GQHFcV1FnT0U22yja4g3HzGOJzKL0q0sfJWphAiOwCUK40H"
    }
  ];

  const testimonials = [
    {
      name: "Clara Bennett",
      time: "2 months ago",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAW7VvpSVDyhw8Xus4B8EuUGROvcCjQ5yw8cP53wD_uCS4s4L30Lh3QvOKCPNqG7fF6Z3LNb7eqblXdDn0_rtw8ryZ5QDl5EcySSf_OW1aeFt7ObMgx3nbiYBOPYa9QdjghYa8F3LOboUc9KGXc_iGZou2Cj0u4O3YlbF4AD3RpC_Q_Sl8fOKwzDYMAbGlvzFUchAKlxjKSbG0Z_c6b4UKqsGmJO57EjpziTeBI8ODsI9kFLPsA2oX1gY2b8v9jCwo8na6EyaJizTuB",
      quote: "\"The food was absolutely amazing! The flavors were rich and the presentation was beautiful. I highly recommend the grilled salmon.\"",
      rating: 5
    },
    {
      name: "Owen Carter",
      time: "3 months ago",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6mtUBZrAGvdcsL9XjtSmgEzSAdJRkW0ZsC4hcXS9zjKMD0Iq_J1102JFKMltAcw7iiBbvvXjwQ3R28Or5Lib3WTPZeygRnAdwDxmca1hE6r7k8n2NE177lyl22b0GcqGbTBPBItHHhvzgjin3faLxc7tSKp61VtDS3AnYff4dutwvTXxzmtnelwog8fXVg1iRQJyOEqtIJWbKvnygTjy5Evj2R9Xac5-gN-7PjvO7YFnZQAqk406AEq1wGrit9OM0o2C2G_zOlaMA",
      quote: "\"I had the ribeye steak and it was cooked perfectly. The service was also excellent, making for a great dining experience.\"",
      rating: 4
    },
    {
      name: "Emma Reed",
      time: "4 months ago",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZ6nFag9z_30zagLnwo8Y7-akZp11Gj17sX3GcRp6zuXptFFKf-JGBVm3T-gZ6kVCnTiApaC-213X6gnyCBC37NBIDF2MQEeXdaO3-LjNIkd0F6jvk_Z4q5MzyDCDLfJ4OHKuU8zWD7Jrs0hNxmVCVoTl5nHVtMnTkyD30p6imdj6q1jPXHUxm_0fJIPHnBe1xM-hTCvFEW5PYAxaw6c0axSKIn4XzWVUKUWVBN5sWUaxfq4H5TE-IsDZUJtS_gGscdGpXIWDUbGUY",
      quote: "\"The vegetarian delight was a pleasant surprise. It was flavorful and satisfying, and the ingredients were fresh. I'll definitely be back for more.\"",
      rating: 5
    }
  ];

  const StarIcon = ({ filled }: { filled: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
      {filled ? (
        <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z" />
      ) : (
        <path d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-16.54,0l-51,31h0L82.2,157.4a16,16,0,0,0-5.08-15.71L32,102.35a.37.37,0,0,1,0-.09l59.44-5.14a16,16,0,0,0,13.35-9.75L128,32.08l23.2,55.29a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z" />
      )}
    </svg>
  );

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#1b1a18] dark group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCfpOP8XZn374r26t1y0h4x_sJ7BaaHbuwN_1eVZ8-MfoMAQ816e9V7_DmlbA7VAXGfr5pS9uwADy2t_Z04FjgX0Y7jS8elYBwW-aE2waK-9fK6FAYd4gbWioP8AVeoDUcEGAgFn8bxKgiwfcm0iUehdPfPNbO4mhmWmqsSh68LVGK169J9URkMAZL9wOn-roVBK8GLMD6bSMqm4vHH7TgTTZTdDjzo2jfOF-beXrRKclyLZ0Y3N6XNHIRKoPBk1xaIqKOBxxRzeq8T")'
                  }}
                >
                  <div className="flex flex-col gap-2 text-left">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                      Taste the Difference
                    </h1>
                    <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      Experience the finest dining with our exquisite menu and exceptional service.
                    </h2>
                  </div>
                  <Link
                    to="/reservation"
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#211e1b] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                  >
                    <span className="truncate">Book a Table</span>
                  </Link>
                </div>
              </div>
            </div>

            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Special Offers</h2>
            <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex items-stretch p-4 gap-3">
                {specialOffers.map((offer, index) => (
                  <div key={index} className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                      style={{ backgroundImage: `url("${offer.image}")` }}
                    ></div>
                    <div>
                      <p className="text-white text-base font-medium leading-normal">{offer.title}</p>
                      <p className="text-[#b1adaa] text-sm font-normal leading-normal">{offer.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Featured Dishes</h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {featuredDishes.map((dish, index) => (
                <div key={index} className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{ backgroundImage: `url("${dish.image}")` }}
                  ></div>
                  <div>
                    <p className="text-white text-base font-medium leading-normal">{dish.title}</p>
                    <p className="text-[#b1adaa] text-sm font-normal leading-normal">{dish.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">What Our Customers Say</h2>
            <div className="flex flex-col gap-8 overflow-x-hidden bg-[#1b1a18] p-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex flex-col gap-3 bg-[#1b1a18]">
                  <div className="flex items-center gap-3">
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                      style={{ backgroundImage: `url("${testimonial.avatar}")` }}
                    ></div>
                    <div className="flex-1">
                      <p className="text-white text-base font-medium leading-normal">{testimonial.name}</p>
                      <p className="text-[#b1adaa] text-sm font-normal leading-normal">{testimonial.time}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className={i < testimonial.rating ? "text-[#211e1b]" : "text-[#6d6964]"}>
                        <StarIcon filled={i < testimonial.rating} />
                      </div>
                    ))}
                  </div>
                  <p className="text-white text-base font-normal leading-normal">
                    {testimonial.quote}
                  </p>
                </div>
              ))}
            </div>

            {/* Rewards Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="px-4 py-8"
            >
              <div className="bg-[#211e1b] rounded-lg p-6 border border-[#383633]">
                <div className="text-center mb-6">
                  <h2 className="text-white text-2xl font-bold mb-2">Earn Rewards</h2>
                  <p className="text-gray-400">Join our loyalty program and earn points with every order</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">1,250</div>
                    <div className="text-gray-400 text-sm">Points Available</div>
                  </div>
                  <div className="text-gray-400">•</div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">Gold</div>
                    <div className="text-gray-400 text-sm">Member Level</div>
                  </div>
                  <div className="text-gray-400">•</div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">4</div>
                    <div className="text-gray-400 text-sm">Rewards Available</div>
                  </div>
                </div>
                <div className="text-center mt-6">
                  <Link
                    to="/loyalty"
                    className="inline-flex items-center gap-2 bg-yellow-400 text-[#1b1a18] px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-200"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                    View My Rewards
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
